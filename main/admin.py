from django.contrib import admin
from .models import Comment_board, Data, Feedback, Request, Like, Board
# Register your models here.
admin.site.register(Data)
admin.site.register(Request)
admin.site.register(Feedback)
admin.site.register(Like)
admin.site.register(Board)
admin.site.register(Comment_board)