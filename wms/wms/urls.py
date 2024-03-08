"""
URL configuration for wms project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.urls import path, include, re_path
from app1 import views
from wms.auth import views as auth_views
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r'users', auth_views.token, 'user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path("nober/", include('app1.urls')),
    path("api/", include('app1.urls')),
    path("api/cont/", include('contributions.urls')),
     path('login', auth_views.login, name='login'),
     path('signup', auth_views.signup, name='signup'),
    #  url(r'^auth/', include('djoser.urls'))
    path("api/auth/", include('djoser.urls')),
    path("api/auth/", include('djoser.urls.authtoken')),
    path("api/acc/", include('accountings.urls')),
     
]
