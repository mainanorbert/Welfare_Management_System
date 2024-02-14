from app1.models import Members
from contributions.models import Contributions, AllContribution
from django.db.models import Sum
from rest_framework import viewsets
from rest_framework.decorators import action
from app1.serializer import MembersSerializer
from contributions.contribition_serializer import AllContributionsSerializers
from rest_framework.response import Response
from app1.authenticate import AllowUnauthenticated


class SumAmounts(viewsets.ViewSet):
    def list(self, request):
        membership_amount = Members.objects.aggregate(total_amount=Sum('reg_amount'))['total_amount'] or 0
        cont_amount = AllContribution.objects.aggregate(total_amount=Sum('amount'))['total_amount'] or 0
        totals = membership_amount + cont_amount

        totals_data = {
            'membership_amount': membership_amount,
            'cont_amount': cont_amount,
            "totals": totals
        }
        return Response(totals_data)
    

class ContributionIdView(viewsets.ViewSet):
    def list(self, request):
        # Aggregate total contribution amount for each cont_id
        cont_totals = AllContribution.objects.values('cont_id').annotate(total_amount=Sum('amount'))
        
        # Calculate total contribution amount across all cont_ids
        total_contribution = AllContribution.objects.aggregate(total_amount=Sum('amount'))['total_amount'] or 0
        
        # Prepare response data
        cont_data = []
        for cont_total in cont_totals:
            cont_id = cont_total['cont_id']
            total_amount = cont_total['total_amount']
            cont_data.append({
                'cont_id': cont_id,
                'total_amount': total_amount,
            })

        totals_data = {
            'total_contribution': total_contribution,
            'cont_data': cont_data,
        }
        return Response(totals_data)

        