from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import User
from .serializers import CreateUserSerializer

# 특정글의 리뷰들 반환 -> 가게 상제조회할때 같이 함


class UserCL(APIView):
    def post(self, request, format=None):  # 리뷰 작성
        print(request.data)
        serializer = CreateUserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
