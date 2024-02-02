from rest_framework import serializers
from .models import Contributions
from .models import AllContribution


class ContributionSerializers(serializers.ModelSerializer):
    class Meta:
        model =Contributions
        fields = '__all__'
        
class AllContributionsSerializers(serializers.ModelSerializer):
    class Meta:
        model= AllContribution
        fields = '__all__'
        