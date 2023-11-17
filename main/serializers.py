from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Group, Facultie


class FacultiesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Facultie
        fields = ('id', 'name', 'dean', 'phone_number')

class GroupsSerializers(serializers.ModelSerializer):
    faculty_name = serializers.SerializerMethodField('get_faculty_name')

    class Meta:
        model = Group
        fields = ('id', 'name', 'faculty_name', 'year')

    def get_faculty_name(self, Group):
        faculty_name = Group.faculty.name
        return faculty_name



class ReasonsSerializer(APIView):
    REASONS = {'reasons': [{'reason': 'Chti', 'rating': -10}, {'reason': 'Chti', 'rating': -10},
                           {'reason': 'Chti', 'rating': -10}]}

    def get(self, request):
        return Response(self.REASONS)
