from django.urls import path
from django.conf.urls import include, url
from rest_framework import routers

urlpatterns = [
    path('auth/', include('api.auth.urls')),
    path('settings/', include('api.settings.urls')),
]