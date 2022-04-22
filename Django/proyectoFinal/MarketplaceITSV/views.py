from django.shortcuts import render, redirect

# Create your views here.
from .models import *
from .forms import CommentForm, PostForm
from MarketplaceITSV.forms import CommentForm, PostForm


def frontpage(request):
    posts = Post.objects.all()

    return render(request, 'blog/frontpage.html', {'posts': posts})



def post_detalle(request, title):
    
    post = Post.objects.get(title=title)
    #en esta linea traemos el posteo que por el title que tenga

    if request.method == 'POST':
        form = CommentForm(request.POST)
        #en esta linea creamos el formulario de los comentarios

        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()
            
            

            return redirect('post_detalle', title= post.title)

            
    else:
        form = CommentForm()
    
    return render(request, 'blog/post_detalle.html', {'post': post, 'form': form})
    #en esta linea renderizamos el posteo que se queria mostrar en detalle y tambien renderizamos el formulario de los comentarios




def crear_post(request):

    if request.method == 'POST':
        crear_post_form = PostForm(request.POST, request.FILES)

        if crear_post_form.is_valid():
           crear_post_form.save()
           return redirect('frontpage')
    else:
        crear_post_form = PostForm()
    return render(request, 'blog/crear_post_blog.html', {'crear_post_form':crear_post_form})




def editar_post(request, title):
    post = Post.objects.get(title=title)
    print("holaa")
    form = PostForm(request.POST or None, instance= post)
    print("todavia no entro al if")

    if form.is_valid():
        form.save()
        return redirect('frontpage')

        print("valido")

    return render(request, 'blog/editar_post.html', {"post": post, "form": form})





