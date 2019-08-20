from django.urls import path
from django.conf.urls import include, url
from api.settings.views import globalSettingsView, SettingsView, SettingsListCreate, SettingsRetrieveUpdateDestroy

urlpatterns = [
    # path('', globalSettingsView.as_view({ 'get': 'list', 'post': 'create'}), name="Settings"),
    path('show', SettingsView.as_view(), name="Settings"),
    path('show/<int:pk>', SettingsView.as_view()),
    path('', SettingsListCreate.as_view()),
    path('view/<int:pk>/', SettingsRetrieveUpdateDestroy.as_view()),
]