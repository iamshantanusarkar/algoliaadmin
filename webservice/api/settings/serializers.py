from rest_framework import serializers
from api.settings.models import gloobalSettings

class globalSettingsSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    apiKey = serializers.CharField(max_length=50)
    apiToken = serializers.CharField(max_length=50)
    indexName = serializers.CharField(max_length=50)

    class Meta:
        model = gloobalSettings
        fields = ("id","apiKey", "apiToken", "indexName")
        read_only_fields = ['id']
    
    def create(self, validated_data):
        return gloobalSettings.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.apiKey = validated_data.get('apiKey', instance.apiKey)
        instance.apiToken = validated_data.get('apiToken', instance.apiToken)
        instance.indexName = validated_data.get('indexName', instance.indexName)

        instance.save()
        return instance