from rest_framework import serializers

from .models import Group


class GroupsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'faculty', 'year')
