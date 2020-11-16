from django.db import models

# Create your models here.
class All_Users(models.Model): 
    name_user = models.CharField(max_length= 200)
    email_user = models.EmailField(max_length = 254) 

    def __str__(self):

        return (self.email_user)