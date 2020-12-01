from rest_framework import serializers
from user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["token"]
# Token에 kakao id 저장
