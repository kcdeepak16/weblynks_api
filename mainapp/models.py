from django.db import models
import time
# Create your mdels here.

class queries(models.Model):
	fname = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	number = models.CharField(max_length=15, blank=True)
	service = models.CharField(max_length=30)
	details = models.TextField(max_length=1000)
	time = models.DateTimeField(auto_now_add=True)

class services(models.Model):
	name = models.CharField(max_length=20)
	description = models.TextField(max_length=1000)
	background_color1 = models.CharField(max_length=10)
	background_color2 = models.CharField(max_length=10)
	