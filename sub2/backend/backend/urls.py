"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# fmt: off
urlpatterns = [ # url들을 등록(url에 따라 처리할 함수를 등록)
    path("admin/", admin.site.urls),
     # api라는 app의 urls.py를 추가
     # url은 항상 /로 닫는다
    path("api/", include("api.urls")), # api라는 url로 들어오면 api.urls에서 처리
    path("store/", include("store.urls")),
    path("review/", include("review.urls")),
    path("user/", include("user.urls")),
    # path("jmt/", include("jmt.urls")),
]
# fmt: on
