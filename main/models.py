from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)
    year = models.PositiveSmallIntegerField('year', max_length=6, null=False)
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
    SIGN_CHOICES = ["-", "+"]

    date_of_change = models.DateTimeField(null=False)
    description = models.TextField(null=True)
    sign = models.CharField(max_length=1, choices=SIGN_CHOICES, null=False)
    rating_value = models.PositiveSmallIntegerField(max_length=100, null=False)
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
    ROLE_CHOICES = ["admin", "teacher"]

    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, unique=True, null=False)
    password = models.CharField(max_length=256, null=False)
    role = models.CharField(choices=ROLE_CHOICES, null=False)
    about = models.TextField(null=True)
    groups = models.ManyToManyField(Group)

    def __str__(self):
        return self.name
