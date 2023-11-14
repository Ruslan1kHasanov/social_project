from rest_framework import serializers

from .models import Groups


class GroupsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Groups
        fields = ('id', 'name', 'faculty', 'year')
