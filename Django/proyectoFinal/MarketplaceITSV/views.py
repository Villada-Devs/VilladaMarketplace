from django.shortcuts import render, redirect


#🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿

# Create your views here.
from .models import *
from .forms import CommentPostForm, PostForm
from MarketplaceITSV.forms import CommentPostForm, PostForm, EventForm, CommentEventForm
from django.views.generic import DeleteView, ListView, UpdateView, CreateView, FormView
from django.urls import reverse_lazy

def list_blog(request):
    posts = Post.objects.all()

    return render(request, 'blog/list_blog.html', {'posts': posts})


# TODAS LAS VIEWS DE BLOG

def post_detalle(request, title):
    
    post = Post.objects.get(title=title)
    #en esta linea traemos el posteo que por el title que tenga

    if request.method == 'POST':
        form = CommentPostForm(request.POST)
        #en esta linea creamos el formulario de los comentarios

        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()
            
            

            return redirect('post_detalle', title= post.title)

            
    else:
        form = CommentPostForm()
    
    return render(request, 'blog/post_detalle.html', {'post': post, 'form': form})
    #en esta linea renderizamos el posteo que se queria mostrar en detalle y tambien renderizamos el formulario de los comentarios




def crear_post(request):

    if request.method == 'POST':
        crear_post_form = PostForm(request.POST, request.FILES)

        if crear_post_form.is_valid():
           print("pene")
           crear_post_form.save()
           return redirect('list_blog')
    else:
        crear_post_form = PostForm()
    return render(request, 'blog/crear_post_blog.html', {'crear_post_form':crear_post_form})


def editar_post(request, id):

    post = Post.objects.get(pk=id)
    form = PostForm(request.POST or None, instance= post)
    
    if form.is_valid():
        form.save()
        return redirect('list_blog')
        
    return render(request, 'blog/editar_post.html', {"post": post, "form": form})

class PostDelete(DeleteView):
    model = Post
    template_name = 'blog/post_delete.html'
    success_url = reverse_lazy('list_blog')


# TODAS LAS VIEWS DE EVENTOS
'''
class EventList(ListView):
    model = Event
    template_name = 'events/event_list.html'
'''

def event_list(request):
    events = Event.objects.all()

    return render(request, 'events/event_list.html', {'events': events})



def create_event(request):

    if request.method == 'POST':
        form = EventForm(request.POST, request.FILES)

        if form.is_valid():
           print("pene")
           form.save()
           return redirect('event_list')
    else:
        form = EventForm()
    return render(request, 'events/create_event.html', {'form':form})


class UpdateEvent(UpdateView):
    model = Event
    template_name = 'events/update_event.html'
    form_class = EventForm
    success_url = reverse_lazy('event_list')

class DeleteEvent(DeleteView):
    model = Event
    template_name = 'events/delete_event.html'
    success_url = reverse_lazy('event_list')





