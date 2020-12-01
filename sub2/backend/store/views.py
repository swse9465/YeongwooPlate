from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, settings
from rest_framework.pagination import PageNumberPagination
from user.models import User
from store.models import Store, Menu, Address, StoreLike
from store.serializers import StoreSerializer, MenuSerializer, LikeStoreSerializer
from review.models import Review
from review.serializers import ReviewSerializer
from django.db.models import Q, Count, Model, F, Avg
from django.http import Http404
import json
import time


# 가게 목록 조회, 가게 정보 생성
class StoreCL(APIView):
    serializer_class = StoreSerializer
    pagination_class = PageNumberPagination  # settings.py에 있는 기본 설정 사용하는듯

    def get(self, request, format=None): # 가게 정보 목록 반환
        # request.GET과 같지만 명확성을 위해 사용
        name = self.request.query_params.get("name", "")
        option = self.request.query_params.get("option")        
        area = self.request.query_params.get("area", "")
        category = self.request.query_params.get("category", "")

        # address, area, branch, category, id, jmtcontentlist, latitude, longitude, menu, name, review, tel, wishlist
            # review로 sort 할경우 각 글들의 리뷰 번호를 기준으로 정렬(카운팅 XX)

        # 기본적으로 인기순으로 정렬되어있음 
        store = Store.objects.filter(Q(name__icontains=name) 
            | Q(address__icontains=name) | Q(category__icontains=name)).order_by("-like")

        #옵션에따른 쿼리 전처리 -> count 가져와서 이용하여 sort
        if option is not None:
            if option == '0': # 평점
                store = store.extra(
                    select = {'avg' : 'select avg(score) from review_review '+
                    'where store_store.id = review_review.store_id '+
                    'group by store_id having count(*)>30'}
                )
                store = store.order_by('-avg')
            elif option == '1': # 인기 -> 좋아요
                store = store.order_by("-like")
            elif option == '2': # 리뷰 개수 정렬
                store = store.extra(
                    select = {'count': 'select count(*) from review_review where store_store.id = review_review.store_id'}
                )
                store = store.order_by('-count')  
                
        if area is not None:
            store = store.filter(address__icontains=area)

        if category is not None:
            store = store.filter(category__icontains=category)

# {
#     "name": 검색어
#     "page": 페이지
#     "append": false
#     "option": 검색필터[0=평점순,1=인기순,2=리뷰순]
#     "area": 지역코드
#     "category": 음식 카테고리
# }

        page = self.paginate_queryset(store)

        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = StoreSerializer(store, many=True)
        return Response(serializer.data)

    def post(self, request, format=None): # 새로운 가게 추가
        # request에서 data 읽어와서 검증하고 통과하면 저장, 아니면 ㅂㅂ
        serializer = StoreSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    # 페이징을 위한 함수들
    @property
    def paginator(self):
        if not hasattr(self, '_paginator'):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        return self._paginator

    def paginate_queryset(self, queryset):
        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset,
                   self.request, view=self)

    def get_paginated_response(self, data):
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data)



# 가게 상세조회, 수정, 삭제
class StoreRUD(APIView):
    def get_store(self, pk): # 특정 가게 객체 가져옴, 없으면 404 리턴
        try:
            return Store.objects.get(pk=pk)
        except Store.DoesNotExist:
            raise Http404

    # 가게 상세조회 -> request빼면 오류남...(get() got multiple values for argument 'pk')
    def get(self, request, pk, format=None):
        chekced = False # 좋아요 표시여부
        
        store = self.get_store(pk)
        storeSerializer = StoreSerializer(store) # store.id

        # user = request.user
        # if user.is_authenticated: 
        #     # SELECT `store_storelike`.`id`, `store_storelike`.`store_id`, `store_storelike`.`user_id` FROM `store_storelike` WHERE (`store_storelike`.`store_id` = 15 AND `store_storelike`.`user_id` = 7)
        #     like = StoreLike.objects.filter(user = user, store = store.id)
        #     if like is not None: # 좋아요 눌렀음
        #         chekced = like.id

        menu = Menu.objects.filter(store=pk) 
        menuSerializer = MenuSerializer(menu, many=True)

        review = Review.objects.filter(store=pk).order_by("-reg_time")
        reviewSerializer = ReviewSerializer(review, many=True)
        
        # 앞에 쿼리 결과물들을 json 인코딩(문자열) -> JSON 디코딩(python의 데이터 타입으로 변경) 
        # 가게정보, 메뉴, 리뷰, 좋아요 체크여부 순으로 반환
        result = json.loads(json.dumps([storeSerializer.data, menuSerializer.data, 
                reviewSerializer.data, chekced], ensure_ascii=False))
            
        # time.sleep(1) # 1초간 멈춘다!!!

        # ensure_ascii=False 로 한글 표시
        return Response(result, status=status.HTTP_200_OK)
    
    # 가게 정보 수정
    def put(self, request, pk, format=None):
        store = self.get_store(pk)
        # 기존 객체에 받은 정보를 반영하여 변환
        serializer = StoreSerializer(store, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    # 가게 정보 삭제 -> 리뷰, 위시리스트, 메뉴, jmt 다 같이 삭제됨
    def delete(self, request, pk, format=None):
        store = self.get_store(pk)
        store.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

    
class StoreAddr(APIView):
    def get(self, request, format=None):
        option = self.request.query_params.get("option")   # 0(시/도) 1(시/군/구) 

        addr = None
        addrList = []

        if option == '0':
            addr = Address.objects.values('sido').annotate(Count('sido'))
            for ad in addr:
                addrList.append(ad['sido'])
            return Response(addrList, status = status.HTTP_200_OK)

        elif option == '1':
            sido = self.request.query_params.get("sido") # 선택된 시도 정보 가져오기
            
            # 시도 정도가 없거나 가져온 군,구가 없으면 400 에러
            if sido is None:
                return Response(status = status.HTTP_400_BAD_REQUEST)

            addr = Address.objects.filter(sido__icontains=sido).values('gungu')
            for ad in addr:
                addrList.append(ad['gungu'])

            return Response(addrList, status = status.HTTP_200_OK)
        
        # 옵션값 0, 1 이외이면 400
        return Response(status = status.HTTP_400_BAD_REQUEST)



# store, user 받음 
class LikeC(APIView):
    def post(self, request, format=None): # {"store": 15, "user": 7}
        # print(request.data['store'])  # request 데이터의 store값에 접근 
        
        likeSerializer = LikeStoreSerializer(data = request.data)
        
        if likeSerializer.is_valid():
            self.increseLike(request.data['store'])
            likeSerializer.save()
            return Response(likeSerializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(likeSerializer.errors, status = status.HTTP_400_BAD_REQUEST) 

    def increseLike(self, no):
        store = Store.objects.get(pk=no)

        if store is None:
            raise Http404
        
        likes = store.like
        store.like = likes + 1
        store.save()
        return


class LikeD(APIView):
    def get_like(self, pk):
        try:
            return StoreLike.objects.get(pk=pk)
        except StoreLike.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
    
    def delete(self, request, pk, format=None): # 번호 받아서 삭제 
        like = self.get_like(pk)

        serial = LikeStoreSerializer(like)

        store = Store.objects.get(pk=serial['store'].value)

        if store is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        store.like = store.like - 1 
        store.save()

        like.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)