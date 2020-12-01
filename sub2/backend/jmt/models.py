from django.db import models
from store.models import Store

# 이거 조금 생각해야할거 같음, ERD 고민해봐야할듯

class Jmtcontent(models.Model):
    name = models.CharField(max_length=30)
    photo = models.CharField(max_length=50)

class Jmtcontentlist(models.Model):
    store = models.ForeignKey(Store, on_delete = models.CASCADE)
    jmtcontent = models.ForeignKey(Jmtcontent, on_delete = models.CASCADE)

