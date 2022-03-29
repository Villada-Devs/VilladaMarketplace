from django.shortcuts import render, redirect

# Create your views here.
from .models import *
from .forms import CommentForm
from MarketplaceITSV.forms import CommentForm


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




