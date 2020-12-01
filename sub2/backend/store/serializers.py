from store.models import Store, Menu, Address, StoreLike  # models.js에 만들어놓은 class import
from rest_framework import serializers

# 쿼리셋을 nested한 JOSN으로 매핑하기 위해 작성
class StoreSerializer(serializers.ModelSerializer): # create(), update() 메서드 이미 구현되있음
    class Meta:
        model = Store # 어떤 모델을 사용하는지 지정 
        fields = [  # store 모델에 있는 변수들, 전부 쓸경우 '__all__'로 가능
            "id",
            "name",
            "branch",
            "area",
            "tel",
            "address",
            "latitude",
            "longitude",
            "category_list",
            "like",
            "imgurl"
        ] #'__all__'

class LikeStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreLike
        fields = ["id", "store", "user"]

class LikeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreLike
        fields = ["store", "user"]

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
