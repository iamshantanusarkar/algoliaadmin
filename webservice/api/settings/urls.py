from django.urls import path
from django.conf.urls import include, url
from api.settings.views import gloobalSettingsView

urlpatterns = [
    path('', gloobalSettingsView.as_view({ 'get': 'list', 'post': 'create'}), name="gloobalSettings-list"),
]