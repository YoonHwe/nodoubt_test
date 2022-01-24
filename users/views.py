from django.shortcuts import render
from main.models import Board
from django.contrib.auth.models import User
# Create your views here.

def mypage(request):
    user = request.user
    boards = Board.objects.filter(writer=user)
    return render(request, 'users/mypage.html',{'boards':boards})

