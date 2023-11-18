from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Group, Facultie, Student, HistoryOfRating


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


class StudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'email', 'rating', 'description', 'group')

class StudentProfileSerializers(serializers.ModelSerializer):
    group_name = serializers.SerializerMethodField('get_group_name')
    class Meta:
        model = Student
        fields = ('id', 'name', 'email', 'rating', 'description', 'group_name')

    def get_group_name(self, Student):
        group_name = Student.group.name
        return group_name


# class HistoryOfRatingSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = HistoryOfRating
#         fields = ('date_of_change', 'reason', 'rating_value', 'id_student')

class HistoryOfRatingSerializers(serializers.ModelSerializer):
    class Meta:
        model = HistoryOfRating
        fields = ('date_of_change', 'reason', 'rating_value', 'id_student')

    def update(self, instance, validated_data):
        instance.rating_value = validated_data.get('rating_value', instance.rating_value)
        return instance


class ReasonsSerializer(APIView):
    REASONS = {'reasons': [{'reason': 'Пользование мобильным устройством во время пары', 'rating': '-20'},
                           {'reason': 'Опоздание более чем на 0 милисекунд', 'rating': '-50'},
                           {'reason': 'Недостаточная вежливость по отношению к преподавателю и студентам',
                            'rating': '-10'},
                           {'reason': 'Невнимательное поведение на лекции', 'rating': '-20'},
                           {'reason': 'Некрасивый почерк у доски', 'rating': '-10'},
                           {'reason': 'Недостаточная активность на семинаре или практике', 'rating': '-30'},
                           {'reason': 'Плохое настроение', 'rating': '-5'},
                           {'reason': 'Оскорбление администрации', 'rating': '-100'},
                           {'reason': 'Немытая голова', 'rating': '-10'},
                           {'reason': 'Задержка в сдаче дз', 'rating': '-50'},

                           {'reason': 'Хорошие взаимоотношения с администратором', 'rating': '+100'},
                           {'reason': 'Своевременное выполнение дз', 'rating': '+10'},
                           {'reason': 'Активное поведение на семинаре', 'rating': '+20'},
                           {'reason': 'Подарок преподавателю', 'rating': '+50'},
                           {'reason': 'Участие в мероприятии', 'rating': '+30'},
                           {'reason': 'Ответ у доски', 'rating': '+5'},
                           {'reason': 'Отсутствие пропусков за месяц', 'rating': '+10'},
                           {'reason': 'Участие в олимпиаде', 'rating': '+20'},
                           {'reason': 'Отсутствие долгов на протяжении года', 'rating': '+50'},
                           {'reason': 'Отсутствие опозданий за неделю', 'rating': '+5'}]}

    def get(self, request):
        return Response(self.REASONS)
