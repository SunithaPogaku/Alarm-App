from django.shortcuts import render
# Create your views here.

def alarm(request):
    return render(request, 'alarm/alarm.html')