from django.urls import path
from django.conf.urls import include, url
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path('auth/', include('api.auth.urls')),
    path('settings/', include('api.settings.urls')),
]