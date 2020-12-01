from django.utils import timezone
from django.db import models
from user.models import User
from store.models import Store

# Create your models here.
class Review(models.Model):
    content = models.TextField(max_length=400, null=True)
    score = models.IntegerField()
    like = models.IntegerField(default=0)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reg_time = models.DateTimeField(auto_now_add=True)
    # reg_time = models.DateTimeField()
    # def __str__(self):
    #     return 'id = %d, content = %s'%(self.id, self.content)

class Review_photo(models.Model):
    name = models.CharField(max_length=50)
    review = models.ForeignKey(Review, on_delete=models.CASCADE)

class ReviewLike(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)