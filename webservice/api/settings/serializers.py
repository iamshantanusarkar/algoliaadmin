from rest_framework import serializers
from api.settings.models import gloobalSettings

class globalSettingsSerializer(serializers.ModelSerializer):    

    class Meta:
        model = gloobalSettings
        fields = ("apiKey", "apiToken")