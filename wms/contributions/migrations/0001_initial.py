# Generated by Django 5.0.1 on 2024-02-01 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AllContributions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cont_id', models.IntegerField(unique=True)),
                ('amount_cont', models.IntegerField(blank=True, null=True)),
                ('member_no', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Contributions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cont_type', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.TextField()),
                ('contribution_number', models.IntegerField(blank=True, null=True, unique=True)),
            ],
        ),
    ]
