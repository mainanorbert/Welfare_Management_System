from django.db import models
import random

# Create my models here.

class Contributions(models.Model):
    """
    Model representing different types of contributions.
    
    Attributes:
        cont_type (str): The type of contribution.
        description (str): Description of the contribution.
        contribution_number (int): A unique identifier for the contribution.
    """
    cont_type = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField()
    contribution_number = models.IntegerField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        """
        Custom save method to generate a random contribution number if not provided.
        """
        if not self.contribution_number:
            self.contribution_number = random.randint(100, 10000)
        super().save(*args, **kwargs)
        
class AllContribution(models.Model):
    """
    Model representing all contributions.
    
    Attributes:
        cont_id (int): The ID of the contribution.
        amount (int): The amount of the contribution.
        member_no (str): The member number associated with the contribution.
    """
    cont_id = models.IntegerField(unique=False)
    amount = models.IntegerField(unique=False, null=True, blank=True)
    member_no = models.CharField(unique=False, max_length=255, blank=True, null=True)
