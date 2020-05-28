from django.contrib import admin
from .models import (
    CustomerWallet,
    PaymentMethod,
    PaymentTransaction,
    TaskerPaymentAccount,
    TaskerWallet,
)

admin.site.register(PaymentMethod)
admin.site.register(CustomerWallet)
admin.site.register(TaskerPaymentAccount)
admin.site.register(PaymentTransaction)
admin.site.register(TaskerWallet)

# Register your models here.
