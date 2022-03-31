from unittest.util import _MAX_LENGTH
from django.db import models
from django.db.models.fields import CharField, SlugField, DateTimeField, TextField

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    intro = models.TextField()
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    imagen = models.ImageField(upload_to= "images")

#slug es lo que va a salir en  donde se escribe en google por ejemplo facebook/perfil/fotos para eso seria el slug. 
#podriamos cambiar el nombre del slugfield() con "title" funciona como titulo y podemos usar el slug tambien
    class Meta:
        ordering = ['-date']


class Comment(models.Model):
    post = models.ForeignKey('Post', related_name= 'comments',on_delete=models.CASCADE)
    comentario = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

#nose que es el "related_name= 'comments'" en la conexion de foreign key de post
    class Meta:
        ordering = ['-date']



