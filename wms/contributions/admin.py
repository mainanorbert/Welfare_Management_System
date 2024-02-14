from django.contrib import admin
from .models import AllContribution
from .models import Contributions

# Register your models here.
admin.site.register(AllContribution)
admin.site.register(Contributions)
