from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'index'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('blog/',views.handleBlog,name='blog'),
    path('chefs/',views.chefs,name='chefs'),
    path('order/', views.order, name = 'order'),
    
    # path('about', views.)
]