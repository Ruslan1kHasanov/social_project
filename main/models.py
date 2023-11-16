from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)
    year = models.PositiveSmallIntegerField('year', null=False)
    faculty = models.ForeignKey('Facultie', on_delete=models.PROTECT, null=False)

    def __str__(self):
        return self.name


class Facultie(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)
    dean = models.CharField(max_length=100, null=False)
    phone_number = models.CharField(max_length=12, null=False, unique=True)

    def __str__(self):
        return self.name


class HistoryOfRating(models.Model):
    REASON_CHOICES = [("late", "Опоздал(а) на пару"), ("help", "Помог(а) преподавателю"),
                      ("foo", "Бесплатно стал(а) волонтером"), ("lsa", "Платно стал(а) волонтером"),
                      ("cat", "Помог(ла) котёнку"), ("dog", "Помог(ла) собаке")]

    date_of_change = models.DateTimeField(null=False)
    reason = models.TextField(choices=REASON_CHOICES, null=False)
    rating_value = models.IntegerField(null=False)
    id_student = models.ForeignKey('Student', on_delete=models.PROTECT, null=False)

    def __str__(self):
        return self.rating_value


class Student(models.Model):
    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, unique=True, null=False)
    rating = models.IntegerField(null=False)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name


class User(models.Model):
    ROLE_CHOICES = [("admin", "ADMIN"), ("teacher", "TEACHER")]

    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, unique=True, null=False)
    password = models.CharField(max_length=256, null=False)
    role = models.CharField(choices=ROLE_CHOICES, max_length=7, null=False)
    about = models.TextField(null=True)
    groups = models.ManyToManyField(Group)

    def __str__(self):
        return self.name
