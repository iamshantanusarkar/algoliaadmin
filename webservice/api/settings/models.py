from django.db import models
import datetime

# Create your models here.
class gloobalSettings(models.Model):
    apiKey = models.CharField(max_length=50)
    apiToken = models.CharField(max_length=50)
    indexName = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True, blank=True)
    modified = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.apiKey