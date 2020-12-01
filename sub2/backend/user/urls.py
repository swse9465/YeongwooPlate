from . import views
from django.urls import path

app_name = 'user'

urlpatterns = [  # url들을 등록(url에 따라 처리할 함수를 등록)
    path('', views.UserCL.as_view()),  # 유저 계정 생성,
]
