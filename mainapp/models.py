from django.db import models

# Create your models here.

class queries(models.Model):
	fname = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	number = models.CharField(max_length=15, blank=True)
	service = models.CharField(max_length=30)
	details = models.TextField(max_length=1000)