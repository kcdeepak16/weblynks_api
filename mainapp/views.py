from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse	
from django.views.decorators.csrf import csrf_exempt
from braces.views import CsrfExemptMixin
# Create your views here.


def index(request):
	return render(request, 'index.html')

class query_view(CsrfExemptMixin, APIView):
	authentication_classes = []

	def get(self, request, format = None):
		all_queries = queries.objects.filter()
		serialized = QuerySerializer(all_queries, many=True)
		return Response(serialized.data)

	@csrf_exempt
	def post(self, request, format = None):
		dsdata = QuerySerializer(data = request.data)
		if dsdata.is_valid():
			print("valid")
			dsdata.save()
			return Response({'success' : 'true'})
		else:
			return Response({'success' : 'false'})

def sitemap(request):
	return render(request, 'sitemap.xml')


