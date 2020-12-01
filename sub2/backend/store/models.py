from django.db import models
from user.models import User
from django.utils import timezone

# PK의 경우 장고에서 자동으로 관리

class Store(models.Model):  # 메서드 사용을 위하여 models.Model을 받음 
    # integer, char, datetime등 변수마다 타입에 따라 줄 수 있음
    # 외래키의 경우 ForeignKey(대상 class, on_delete+models.CASCADE)
    name = models.CharField(max_length=50)  # 가게 이름
    branch = models.TextField(max_length=20, null=True) 
    area = models.CharField(max_length=50, null=True)
    tel = models.CharField(max_length=20, null=True)
    address = models.CharField(max_length=200, null=True)
    latitude = models.FloatField(max_length=10, null=True)
    longitude = models.FloatField(max_length=10, null=True)
    category = models.CharField(max_length=200, null=True)
    like = models.IntegerField(blank=True, default=0)
    imgurl = models.CharField(max_length=200, null=True, blank=True)

    @property
    def category_list(self):
        return self.category.split("|") if self.category else []

class Menu(models.Model):
    name = models.CharField(max_length=200)  # 메뉴이름
    price = models.IntegerField()  # 메뉴 가격
    store = models.ForeignKey(Store, on_delete=models.CASCADE) # 있는 가게 번호 
    # Store를 외래키로 가져오고 store가 삭제되면 같이 삭제
    
    # def __str__(self):
    #     return 'no = %d, price = %f'%(self.no, self.price)

class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=True)
    store = models.ForeignKey(Store, on_delete=True)
    # 가게나 회원이 지워지면 해당 정보 삭제

class Address(models.Model):
    sido = models.CharField(max_length=20)
    gungu = models.CharField(max_length=30)
    # dong = models.CharField(max_length=20, null=True, blank=True, default=None)

class StoreLike(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE) 
    user =  models.ForeignKey(User, on_delete=models.CASCADE)