from django.urls import path
from django.conf.urls import include, url
from api.settings.views import globalSettingsView, SettingsView

urlpatterns = [
    path('', globalSettingsView.as_view({ 'get': 'list', 'post': 'create'}), name="Settings"),
    path('show', SettingsView.as_view()),
    path('show/<int:pk>', SettingsView.as_view())
]