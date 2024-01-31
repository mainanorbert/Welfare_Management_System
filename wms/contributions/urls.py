from django.urls import path, include
# from .import views
from rest_framework.routers import DefaultRouter
from .views import ContributionsViews

router = DefaultRouter()

router.register(r"contributions", ContributionsViews, basename="contribution")


urlpatterns = [
  
    path('', include(router.urls))
   
]
