from django.shortcuts import render
from rest_framework import generics
from .models import Groups
from .serializers import GroupsSerializers


# Create your views here.

class GroupsApi(generics.ListAPIView):
    queryset = Groups.objects.all()
    serializer_class = GroupsSerializers


def index(request):
    context = {}
    return render(request, 'index.html')
