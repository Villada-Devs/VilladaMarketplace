from unittest.util import _MAX_LENGTH
from django.db import models
from django.db.models.fields import CharField, SlugField, DateTimeField, TextField, DateField, IntegerField

# Create your models here.

class Blog(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=30)
    body = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    

class Comentario(models.Model):
    id = models.IntegerField(primary_key=True)
    blog_id = models.ForeignKey(Blog, on_delete=models.CASCADE)
    created_by = 
    body = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)


class Evento(models.Model):
    id = 
    create_by = 
    title = 
    body = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    image = 


class Pool(models.Model):
    id = 
    created_by = 
    zone = 
    slots = 
    days = 
    tel = 


class Listado(models.Model):
    id = 
    created_by = 
    creation_date = models.DateTimeField(auto_now_add=True)
    expiration_date = 
    item = 
    description = 
    price = 
    tel = 


    
    
    


