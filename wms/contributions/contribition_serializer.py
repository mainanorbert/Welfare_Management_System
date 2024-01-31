from rest_framework import serializers
from .models import Contributions


class ContributionSerializers(serializers.ModelSerializer):
    class Meta:
        model =Contributions
        fields = '__all__'