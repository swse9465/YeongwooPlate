from . import views
from django.urls import path

app_name = 'store'

urlpatterns = [ # url들을 등록(url에 따라 처리할 함수를 등록)
    path('', views.StoreCL.as_view()), # 가게 리스트, 작성, 
    path('<int:pk>/', views.StoreRUD.as_view()), # 정보 수정, 상세조회, 삭제 
    path('addr/', views.StoreAddr.as_view()), # 시도, 군,구 정보 제공
    path('like/', views.LikeC.as_view()), # 가게 좋아요 생성
    path('like/<int:pk>/', views.LikeD.as_view()), # 가게 좋아요 삭제 (조회때 넘겨준 리뷰id값 사용)
]
