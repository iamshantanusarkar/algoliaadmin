# Generated by Django 2.2.3 on 2019-08-02 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='gloobalSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apiKey', models.CharField(max_length=50)),
                ('apiToken', models.CharField(max_length=50)),
            ],
        ),
    ]
