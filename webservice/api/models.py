from django.db import models

# Create your models here.
class gloobalSettings(models.Model):
    apiKey = models.CharField(max_length=50)
    apiToken = models.CharField(max_length=50)

    def __str__(self):
        return self.apiKey
