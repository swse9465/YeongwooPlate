from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Review
from .serializers import ReviewSerializer, ReviewPhotoSerializer, CreateReviewSerializer, UpdateReviewSerializer, LikeReviewSerializer
from store.views import StoreRUD

from django.db.models import Q, Count, Model, F
# 특정글의 리뷰들 반환 -> 가게 상제조회할때 같이 함
class ReviewCL(APIView):

    def post(self, request, format=None): # 리뷰 작성
        serializer = CreateReviewSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


# 특정글의 리뷰 목록, 생성, 수정, 삭제
class ReviewRUD(APIView):
    def get_review(self, pk): # 리뷰 pk로 리뷰객체들 반환
        try:
            return Review.objects.get(pk=pk)
        except Review.DoseNotExist:
            raise Http404
    
    # filter 사용시에 serializer에 항상 many=True 옵션 사용해야함
    # 결과가 1개 여도 attribute 에러 발생함
    def get(self, request, pk, format=None): # 리뷰 번호 받아서 특정 리뷰 반환(최신순)
        review = self.get_review(pk)
        print(review)
        print(review.id)
        serializer = ReviewSerializer(review)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def put(self, request, pk, format=None): # 리뷰 번호 받아서 수정
        review = self.get_review(pk)

        if request.data['user'] != review.user:
            return Response(status = status.HTTP_400_BAD_REQUEST)

        serializer = UpdateReviewSerializer(review, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


    def delete(self, request, pk, format=None): # 리뷰 번호를 받아서 리뷰 작성
        review = self.get_review(pk)
        review.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


class ReviewLike(APIView):
    def get_review(self, pk): # 리뷰 pk로 리뷰객체들 반환
        try:
            return Review.objects.get(pk=pk)
        except Review.DoseNotExist:
            raise Http404

    def post(self, request, pk, format=None):
        pass

    def put(self, request, pk, format=None):
        review = self.get_review(pk)
        serializer = LikeReviewSerializer(review, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None): 
        pass