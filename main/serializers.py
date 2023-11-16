from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Group


class GroupsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'faculty', 'year')


class ReasonsSerializer(APIView):
    REASONS = {'reasons': [{'reason': 'Chti', 'rating': -10}, {'reason': 'Chti', 'rating': -10},
                           {'reason': 'Chti', 'rating': -10}]}

    def get(self, request):
        return Response(self.REASONS)
