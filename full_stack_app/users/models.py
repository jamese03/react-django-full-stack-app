from django.db import models

# Create your models here.

#todo figure out how to customize this to return mm-dd--yy
class CustomDateTimeField(models.DateTimeField):
    def value_to_string(self, obj):
        val = self.value_from_object(obj)
        if val:
            val.replace(microsecond=0)
            return val.isoformat()
        return ''

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    about_me = models.CharField(max_length=1000, blank=True )
    created_at = CustomDateTimeField(auto_now=True)
