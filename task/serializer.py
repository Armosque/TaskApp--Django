from rest_framework import serializers
from .models import Task

class Taskserializer(serializers.ModelSerializer):
    class Meta:
        #fields= ('id','name','description', 'done')
        model = Task
        fields = '__all__'