# Generated by Django 5.0.1 on 2024-02-01 09:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contributions', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='allcontributions',
            old_name='amount_cont',
            new_name='amount',
        ),
    ]
