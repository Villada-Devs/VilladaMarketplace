from django.shortcuts import render, redirect

# Create your views here.
from .models import *
from .forms import CommentForm, PostForm
from MarketplaceITSV.forms import CommentForm, PostForm


def frontpage(request):
    posts = Post.objects.all()

    return render(request, 'blog/frontpage.html', {'posts': posts})



def post_detalle(request, slug):
    post = Post.objects.get(slug=slug)

    if request.method == 'POST':
        form = CommentForm(request.POST)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()

            return redirect('post_detalle', slug=post.slug)
            
    else:
        form = CommentForm()
    
    return render(request, 'blog/post_detalle.html', {'post': post, 'form': form})



def crear_post(request):
    if request.method == 'POST':
        crear_post_form = PostForm(request.POST, request.FILES)
        if crear_post_form.is_valid():
           crear_post_form.save()
           return redirect('frontpage')
    else:
        crear_post_form = PostForm()
    return render(request, 'blog/crear_post_blog.html', {'crear_post_form':crear_post_form})



