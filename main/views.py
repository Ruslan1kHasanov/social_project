from django.shortcuts import render
from rest_framework import generics, permissions, filters
from .models import Group, Facultie, Student, HistoryOfRating
from .serializers import GroupsSerializers, FacultiesSerializers, StudentsSerializers, HistoryOfRatingSerializers


# Create your views here.

class GroupsApi(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupsSerializers
    permission_classes = [permissions.IsAuthenticated]


class FacultyApi(generics.ListAPIView):
    queryset = Facultie.objects.all()
    serializer_class = FacultiesSerializers
    permission_classes = [permissions.IsAuthenticated]


class StudentsApi(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentsSerializers
    permission_classes = [permissions.IsAuthenticated]


class HistoryOfRatingApi(generics.ListAPIView):
    queryset = HistoryOfRating.objects.all()
    serializer_class = HistoryOfRatingSerializers
    permission_classes = [permissions.IsAuthenticated]
    # ordering = ('date_of_change',)

    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date_of_change',]


class CreateHistoryOfRatingApi(generics.ListCreateAPIView):
    queryset = HistoryOfRating.objects.all()
    serializer_class = HistoryOfRatingSerializers
    permission_classes = [permissions.IsAuthenticated]


def index(request):
    context = {}
    return render(request, 'index.html')


def auth(request):
    context = {}
    return render(request, 'auth.html')