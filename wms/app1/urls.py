from django.urls import path, include
from .import views
from rest_framework.routers import DefaultRouter
from .views import toDoView, MembersView

router = DefaultRouter()
router.register(r'tasks', toDoView, basename="task")
router.register(r"members", MembersView, basename="members")
# urlpatterns= router.urls


urlpatterns = [
    path("os", views.home, name="home"),
    path("todo/", views.todo, name="todo"),
    path('', include(router.urls))
   
]
