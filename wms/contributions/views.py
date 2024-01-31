
from django.shortcuts import render
from rest_framework import viewsets
from .models import Contributions
from .contribition_serializer import ContributionSerializers


class ContributionsViews(viewsets.ModelViewSet):
    queryset = Contributions.objects.all()
    serializer_class = ContributionSerializers