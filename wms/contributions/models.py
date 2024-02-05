from django.db import models
import random

# Create your models here.

class Contributions(models.Model):
    cont_type =  models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField()
    contribution_number = models.IntegerField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        # Generate a random number between 100 and 2000
        if not self.contribution_number:
            self.contribution_number = random.randint(100, 10000)
        super().save(*args, **kwargs)
        
class AllContribution(models.Model):
    cont_id = models.IntegerField(unique=False)
    amount = models.IntegerField(unique=False, null=True, blank=True)
    member_no = models.CharField(unique=False, max_length=255, blank=True, null=True)