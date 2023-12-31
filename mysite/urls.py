"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from main.serializers import GroupsSerializers, ReasonsSerializer
from main.views import GroupsApi, FacultyApi, StudentsGroupApi, HistoryOfRatingApi, CreateHistoryOfRatingApi, \
    StudentsApi

urlpatterns = [
    path('api/reasons', ReasonsSerializer.as_view()),
    path('api/groups', GroupsApi.as_view()),
    path('api/groups/<int:group_id>', StudentsGroupApi.as_view()),
    path('api/faculties', FacultyApi.as_view()),
    path('api/students/<int:id_student>/history', HistoryOfRatingApi.as_view()),
    path('api/students/<int:pk>', StudentsApi.as_view()),
    path('api/students/<int:id_student>/add', CreateHistoryOfRatingApi.as_view()),
    path('', include('main.urls')),
    path('admin/', admin.site.urls),
    # path('api/auth/', include('rest_framework.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),
]

