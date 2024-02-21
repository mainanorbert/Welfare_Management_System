from rest_framework import serializers
from .models import TodoItem, Members


class toDoSerializer(serializers.ModelSerializer):
    class Meta:
        model =TodoItem
        fields = ("id", "title", "completed")
        
class MembersSerializer(serializers.ModelSerializer):
    """
    Serializer for the Members model, serializing all fields.
    """
    class Meta:
        model = Members
        fields="__all__"