from django.contrib import admin
from .models import Message, Rating, Task, TaskTransaction

admin.site.register(Task)
admin.site.register(Rating)
admin.site.register(Message)
admin.site.register(TaskTransaction)

# Register your models here.
