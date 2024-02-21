from django.db import models

# Create your models here.
class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    completed= models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    
class Members(models.Model):
    """
    Represents a member with details such as first name, second name, email, phone number, member number, status, ID number, and registration amount.
    """
    firstname = models.CharField(max_length=50)
    secondname = models.CharField(max_length=50)
    email = models.EmailField(unique=True, blank=True, null=True)
    phone_no = models.CharField(max_length=15)
    member_no = models.CharField(max_length=250, unique=True)
    status = models.BooleanField(default=False)
    id_no = models.CharField(unique=True, blank=True, null=True, max_length=20)
    reg_amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    
    def __str__(self):
        """
        Returns a dictionary representation of the member's details.
        """
        return [{"firstname":self.firstname, "secondname":self.secondname, "Phone_no": self.phone_no}]
    