
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from .models import Contributions, AllContribution
from .contribition_serializer import ContributionSerializers
from .contribition_serializer import AllContributionsSerializers
from app1.models import Members
from app1.serializer import MembersSerializer
from rest_framework.response import Response
from django.db import models
from app1.authenticate import AllowUnauthenticated
from rest_framework import permissions

class ContributionsViews(viewsets.ModelViewSet):
    queryset = Contributions.objects.all()
    serializer_class = ContributionSerializers
    permission_classes = [AllowUnauthenticated | permissions.IsAuthenticated]

class AllContributions(viewsets.ModelViewSet):
    queryset = AllContribution.objects.all()
    serializer_class = AllContributionsSerializers
    permission_classes = [AllowUnauthenticated | permissions.IsAuthenticated]
    
    @action(detail=True, methods=['get'])
    def contribution_list(self, req, pk=None):
        total_amount = 0
        
        contributions = AllContribution.objects.filter(cont_id=pk)
        cont_data =[]
        for cont in contributions:
            member = Members.objects.get(member_no=cont.member_no)
            member_data = MembersSerializer(member).data
            contribution_type = Contributions.objects.get(contribution_number=pk)
            contribution_type_data = ContributionSerializers(contribution_type).data
            total_amount +=cont.amount
            
            cont_data.append({
                'firstname': member_data['firstname'],
                'secondname': member_data['secondname'],
                'amount': cont.amount,
                'member_id': cont.member_no,
                'cont_type':contribution_type_data['cont_type'],
                'cont_des':contribution_type_data['description']
            })
        cont_data.append({"total_amount": total_amount})
        return Response(cont_data)
        
        