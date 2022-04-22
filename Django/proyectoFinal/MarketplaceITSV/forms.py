from django import forms
from django.db.models import fields
from.models import *
from django.forms import ModelForm


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['comentario']

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'body', 'imagen'] 
