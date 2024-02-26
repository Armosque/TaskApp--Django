
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from task import views

router = routers.DefaultRouter()
router.register(r'task', views.Taskview, 'task')

urlpatterns = [

    path('api/', include(router.urls)),
    path('docs/', include_docs_urls(title='Task API')),
]
