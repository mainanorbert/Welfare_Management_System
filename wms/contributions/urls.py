from django.urls import path, include
# from .import views
from rest_framework.routers import DefaultRouter
from .views import ContributionsViews, AllContributions

router = DefaultRouter()

router.register(r"contributions", ContributionsViews, basename="contribution")
router.register(r'allcontributions', AllContributions, basename="allcontribution")


urlpatterns = [
  
    path('', include(router.urls))
   
]
