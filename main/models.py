from django.db import models


class Groups(models.Model):
    name = models.CharField('faculty', max_length=100, null=False)
    faculty = models.CharField('faculty', max_length=100, null=False)
    year = models.PositiveSmallIntegerField('year', max_length=6, null=False)

    def __str__(self):
        return self.name
