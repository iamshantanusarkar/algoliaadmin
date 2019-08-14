from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import authentication, permissions

from api.settings.models import gloobalSettings
from api.settings.serializers import globalSettingsSerializer

class globalSettingsView(viewsets.ViewSet):

    serializer_class = globalSettingsSerializer

    def list(self, request):
        queryset = gloobalSettings.objects.all()
        serializer = globalSettingsSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = gloobalSettings.objects.all()
        data = get_object_or_404(queryset, pk=pk)
        serializer = globalSettingsSerializer(data)
        return Response(serializer.data)

    def create(self, validated_data):
        return gloobalSettings(**validated_data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class SettingsView(APIView):

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    
    def get(self, request):
        settings = gloobalSettings.objects.all()
        serializer = gloobalSettings(settings, many=True)
        return Response({"stettings": serializer.data})

    def post(self, request):
        settings = request.data.get('gloobalSettings')

        # Create an article from the above data
        serializer = gloobalSettings(data=settings)
        if serializer.is_valid(raise_exception=True):
            article_saved = serializer.save()
        return Response({"success": "settings '{}' created successfully".format(article_saved.apiKey)})
    
