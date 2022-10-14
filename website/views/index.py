from django.shortcuts import render

def index(request):
    return render(request, "/home/hadoop/hd/website/templates/webends/web.html")
