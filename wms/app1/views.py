from django.shortcuts import render, HttpResponse
from .models import TodoItem
from rest_framework import viewsets
from .serializer import toDoSerializer, MembersSerializer
from .models import TodoItem, Members
from .authenticate import AllowUnauthenticated
from rest_framework import permissions
# Create your views here.
from rest_framework.response import Response
from django.db.models import Sum



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
    permission_classes = [AllowUnauthenticated | permissions.IsAuthenticated]
    def list(self, request, *args, **kwargs):
        """
        Custom list method to return a response with total amount and serialized member data.
        """
         # Filter and get the queryset for the view.
        queryset = self.filter_queryset(self.get_queryset())
        
        # Calculate the total amount of all members' reg_amount using Django's aggregate function.
        total_amount = queryset.aggregate(total_amount=Sum('reg_amount')).get('total_amount', 0)
        
         # Serialize the queryset data using the specified serializer class.
        serializer = self.get_serializer(queryset, many=True)
        
        # Prepare the response data with total_amount and serialized member data.
        response_data = {
            'total_amount': total_amount,
            'members': serializer.data
        }
        
        # Return the response data as a JSON response.
        return Response(response_data)


    