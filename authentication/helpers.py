from email import message
from django.core import mail
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives



def send_forget_password_mail(email, token):
    subject = 'Este es el link de recuperacion para su contraseña'
    message = f'hola, ingrese a este link para cambiar su contraseña http://localhost:8000/change/{ token }/ '
    email_from = settings.EMAIL_HOST_USER
    recipient_list =[email]
    send_mail(subject, message, email_from, recipient_list)
    return True


"""
def send_forget_password_mail(email,token):
    message = f'hola, ingrese a este link para cambiar su contraseña http://localhost:8000/change/{ token }/ '
    html_content = render_to_string("mail.html",{'title':'test_email', 'content': message})
    text_content = strip_tags(html_content)

    subject = 'Este es el link de recuperacion para su contraseña'
    email_from = settings.EMAIL_HOST_USER
    recipient_list =[email]

    email = EmailMultiAlternatives(subject, text_content, email_from, recipient_list)
    email.attach_alternative(html_content)
    send_mail(email)
    return True
"""
