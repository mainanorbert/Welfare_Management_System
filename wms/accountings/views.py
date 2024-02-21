"""
Sum Amounts and Contribution Id Viewsets

These viewsets provide endpoints for calculating and retrieving aggregate sums of amounts for members and contributions.

Attributes:
    queryset: The queryset of the model for the viewset.
    serializer_class: The serializer class for the viewset.
    permission_classes: The permission classes required for accessing the viewset.

Methods:
    list: Retrieves and calculates total amounts for members and contributions.
"""

from app1.models import Members
from contributions.models import AllContribution
from django.db.models import Sum
from rest_framework import viewsets
from rest_framework.response import Response
from app1.serializer import MembersSerializer
from contributions.contribition_serializer import AllContributionsSerializers
from app1.authenticate import AllowUnauthenticated

class SumAmounts(viewsets.ViewSet):
    """
    ViewSet for calculating total amounts for members and contributions.
    """

    def list(self, request):
        """
        Retrieves and calculates total amounts for members and contributions.

        Returns:
            Response: A Response object containing the total amounts.
        """
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
    """
    ViewSet for retrieving total contributions per contribution ID.
    """

    def list(self, request):
        """
        Retrieves total contributions per contribution ID.

        Returns:
            Response: A Response object containing the total contributions per ID.
        """
        cont_totals = AllContribution.objects.values('cont_id').annotate(total_amount=Sum('amount'))
        total_contribution = AllContribution.objects.aggregate(total_amount=Sum('amount'))['total_amount'] or 0
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
