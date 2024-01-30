from django.shortcuts import render, HttpResponse
from .models import TodoItem
from rest_framework import viewsets
from .serializer import toDoSerializer, MembersSerializer
from .models import TodoItem, Members
# Create your views here.

def home(request):
    # return HttpResponse("Hello world, am so happy")
    name = "Nobert"
    return render(request, "base.html", {'name':name} )

def todo(request):
    todo = TodoItem.objects.all()
    return render(request, "todo.html", {"todo": todo})


# react frontend
class toDoView(viewsets.ModelViewSet):
    serializer_class = toDoSerializer
    queryset = TodoItem.objects.all()
    
class MembersView(viewsets.ModelViewSet):
    # return HttpResponse("succeess")
    queryset= Members.objects.all()
    serializer_class = MembersSerializer 


    