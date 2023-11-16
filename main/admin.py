from django.contrib import admin
from .models import User, Student, HistoryOfRating, Facultie, Group

admin.site.register(User)
admin.site.register(Student)
admin.site.register(HistoryOfRating)
admin.site.register(Facultie)
admin.site.register(Group)
