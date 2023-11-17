from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Group, Facultie
from .serializers import GroupsSerializers, FacultiesSerializers


# Create your views here.

class GroupsApi(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupsSerializers
    permission_classes = [permissions.IsAuthenticated]


class FacultyApi(generics.ListAPIView):
    queryset = Facultie.objects.all()
    serializer_class = FacultiesSerializers
    permission_classes = [permissions.IsAuthenticated]


def index(request):
    context = {}
    return render(request, 'index.html')


def auth(request):
    context = {}
    return render(request, 'auth.html')