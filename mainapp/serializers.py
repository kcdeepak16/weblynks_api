from .models import *
from rest_framework import serializers

class QuerySerializer(serializers.ModelSerializer):
	class Meta:
		model = queries
		fields = "__all__"

