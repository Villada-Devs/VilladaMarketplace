"""proyectoFinal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static  


from MarketplaceITSV import views
from MarketplaceITSV.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.list_blog, name='list_blog'),
    path('crearpost/', views.crear_post, name='crearpost'),
    path('Post_edit/<int:id>/', views.editar_post, name='editarpost'),
    path('Post_delete/<int:pk>/', PostDelete.as_view(), name='post_delete'),
    path('Post_detail/<str:title>/', views.post_detalle, name='post_detalle'),
    path('createevent/', views.create_event, name='create_event'),
    path('Events/', views.event_list, name='event_list'),
    path('update_event/<int:pk>/', UpdateEvent.as_view(), name='update_event'),
    path('delete_event/<int:pk>/', DeleteEvent.as_view(), name='delete_event'),
]+ static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)

