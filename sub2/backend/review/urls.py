from . import views
from django.urls import path

app_name = 'review'

urlpatterns = [
    path('', views.ReviewCL.as_view()),
    path('<int:pk>/', views.ReviewRUD.as_view()),
    path('like/<int:pk>/', views.ReviewLike.as_view()),
]