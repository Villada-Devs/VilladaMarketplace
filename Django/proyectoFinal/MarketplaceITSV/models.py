from unittest.util import _MAX_LENGTH
from django.db import models
from django.db.models.fields import CharField, SlugField, DateTimeField, TextField, DateField

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    imagen = models.ImageField(upload_to= "images")

    def __str__(self):
        return f"{self.title}" 

    class Meta:
        ordering = ['-date']


class CommentPost(models.Model):
    post = models.ForeignKey('Post', related_name= 'comments',on_delete=models.CASCADE)
    comentario = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

#nose que es el "related_name= 'comments'" en la conexion de foreign key de post
    class Meta:
        ordering = ['-date']

class Event(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    set_date = models.DateField()
    image = models.ImageField(upload_to= "images")


    def __str__(self):
        return f"{self.title}" 

    class Meta:
        ordering = ['-date']

class CommentEvent(models.Model):
    event = models.ForeignKey('Event', related_name= 'comments',on_delete=models.CASCADE)
    comentario = models.TextField()
    date = models.DateTimeField(auto_now_add=True)


