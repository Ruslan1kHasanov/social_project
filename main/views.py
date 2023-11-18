from django.shortcuts import render
from rest_framework import generics, permissions, filters
from .models import Group, Facultie, Student, HistoryOfRating
from .serializers import GroupsSerializers, FacultiesSerializers, StudentsSerializers, HistoryOfRatingSerializers


# Create your views here.

class GroupsApi(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupsSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        pk = self.kwargs.get("pk")

        if not pk:
            return Group.objects.all()

        return Group.objects.filter(pk=pk)

class FacultyApi(generics.ListAPIView):
    queryset = Facultie.objects.all()
    serializer_class = FacultiesSerializers
    permission_classes = [permissions.IsAuthenticated]



class StudentsApi(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentsSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        group_id = self.kwargs.get("group_id")

        if not group_id:
            return Student.objects.all()

        return Student.objects.filter(group_id=group_id)


class HistoryOfRatingApi(generics.ListAPIView):
    queryset = HistoryOfRating.objects.all()
    serializer_class = HistoryOfRatingSerializers
    permission_classes = [permissions.IsAuthenticated]
    # ordering = ('date_of_change',)

    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date_of_change',]

    def get_queryset(self):
        id_student = self.kwargs.get("id_student")

        student = Student.objects.get(pk=id_student)
        rating_value = self.kwargs.get("rating_value")
        # student.rating = student.rating + rating_value
        print(rating_value, student.rating, self.kwargs)

        if not id_student:
            return HistoryOfRating.objects.all()

        return HistoryOfRating.objects.filter(id_student=id_student)


class CreateHistoryOfRatingApi(generics.ListCreateAPIView):
    queryset = HistoryOfRating.objects.all()
    serializer_class = HistoryOfRatingSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        id_student = self.kwargs.get("id_student")

        if not id_student:
            return HistoryOfRating.objects.all()

        return HistoryOfRating.objects.filter(id_student=id_student)

    def post(self, request, *args, **kwargs):
        id_student = self.kwargs.get("id_student")
        student = Student.objects.get(pk=id_student)
        student.rating = student.rating + request.data.get("rating_value")
        print(request.data)
        student.save()
        return self.create(request, *args, **kwargs)


    # def get_queryset(self):
    #     id_student = self.kwargs.get("id_student")
    #
    #     if not id_student:
    #         return HistoryOfRating.objects.all()
    #
    #     return HistoryOfRating.objects.filter(id_student=id_student)


def index(request):
    context = {}
    return render(request, 'index.html')


def auth(request):
    context = {}
    return render(request, 'auth.html')