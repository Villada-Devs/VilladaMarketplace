from email.policy import HTTP
from http.client import HTTPResponse
import profile
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import *
import datetime
import uuid
from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes

import authentication

# Create your views here.

def home(request):
    return render(request, "authentication/index.html")



def signup(request):
    if request.method == "POST":
        fname = request.POST['firstname']
        lname = request.POST['lastname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']
        username = request.POST['username']
        
        #verifica que el username no este tomado
        if User.objects.filter(username=username).exists():
            messages.success(request, "Este nombre de usuario ya esta tomado !")
            return redirect('signup')
        # verifica que el email no este tomado
        else:
            if User.objects.filter(email=email).exists():
                messages.success(request, "Ya existe un usuario registrado con ese email !")
                return redirect('signup')
            else: #nombre no tomado y mail no tomado verifica contraseñas iguales
                if pass1 == pass2:

                    #enviar mail de confirmacion


                    myuser = User.objects.create_user(username, email, pass1)
                    myuser.first_name = fname
                    myuser.last_name = lname
                    myuser.save()
                    messages.success(request, "Cuenta creada correctamente")
                    return redirect('signin')
                else:
                     messages.success(request, "Verifique que ambas contraseñas sean iguales")
                     return redirect('signup')

    return render(request, "authentication/signup.html")

def signin(request):

    if request.method == "POST":
        username1 = request.POST['username']
        pass1 = request.POST['pass1']


        user = authenticate(username=username1 ,password=pass1)

        if user is not None:
            login(request, user)
            fname = user.first_name
            return render(request, "authentication/index.html", {'fname': fname})
        
        else:
            messages.error(request, "nombre de usuario o contraseña incorrectos")

    return render(request, "authentication/signin.html")

def signout(request):
    logout(request)
    messages.success(request, "sesion cerrada")
    return redirect('home')

def consult(request):
    ConsultContent = request.GET.get('email')
    if ConsultContent is None:
        usernameresult = ""
        return render(request, "authentication/consult.html", {'result' : usernameresult})
    else:
        if User.objects.filter(email=ConsultContent).exists():
            usernameresult =  User.objects.get(email=ConsultContent.lower()).username
        else:
            messages.success(request, "No existe un usuario asociado a esa direccion de email")
            return redirect('consult')

    return render(request, "authentication/consult.html", {'result' : usernameresult})
   

