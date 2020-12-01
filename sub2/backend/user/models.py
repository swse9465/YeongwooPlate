from django.db import models

# Create your models here.


class User(models.Model):
    # 유저 id는 pk에 넣었고, pk는 장고에서 자동으로 관리하도록 맡김
    type = models.CharField(max_length=10, blank=True)
    token = models.CharField(max_length=100, blank=True)
    nickname = models.CharField(max_length=20, blank=True)
    age = models.IntegerField(null=True)
    gender = models.CharField(max_length=5)
    profile = models.TextField(max_length=300, blank=True)

    # char, text에 null 넣으면 None과 빈문자열을 갖게됨 -> 빈 문자열을 사용하는것이 장고 컨벤션
    # null=True, blank=False => DB에서는 null, API에서는 required
    # null은 DB과 연관(칼럼의 null값 가능 여부), Blank는 유효성(.is_valid() 호출될때 유효성 검사에 사용, required)
