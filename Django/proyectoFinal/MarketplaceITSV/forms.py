from django import forms
from django.db.models import fields
from.models import *
from django.forms import ModelForm
from django.contrib.admin.widgets import AdminDateWidget


class CommentPostForm(forms.ModelForm):
    class Meta:
        model = CommentPost
        fields = ['comentario']

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'body', 'imagen'] 


class EventForm(forms.ModelForm):
    set_date = forms.DateField(widget = forms.SelectDateWidget)

    class Meta:
        model = Event
        fields = ['title', 'body', 'set_date', 'image']


class CommentEventForm(forms.ModelForm):
    class Meta:
        Model = CommentEvent
        fields = ['comentario']
