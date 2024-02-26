
from rest_framework import viewsets
from .serializer import Taskserializer
from .models import Task

# pylint: disable=no-member
class Taskview(viewsets.ModelViewSet):
    serializer_class = Taskserializer
    queryset = Task.objects.all()



# Create your views here.
