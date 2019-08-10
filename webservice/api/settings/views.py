from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from api.settings.models import gloobalSettings
from api.settings.serializers import globalSettingsSerializer

class gloobalSettingsView(viewsets.ViewSet):

    serializer_class = globalSettingsSerializer

    def list(self, request):
        queryset = gloobalSettings.objects.all()
        serializer = globalSettingsSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = gloobalSettings.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = globalSettingsSerializer(user)
        return Response(serializer.data)

    def create(self, request):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass