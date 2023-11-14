from django.shortcuts import render
from rest_framework import generics
from .models import Group
from .serializers import GroupsSerializers


# Create your views here.

class GroupsApi(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupsSerializers


def index(request):
    context = {}
    return render(request, 'index.html')

