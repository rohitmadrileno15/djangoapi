from django.shortcuts import render

from django.http import HttpResponse
import json

from django.views.decorators.csrf import csrf_exempt

from .models import *

@csrf_exempt
def register_user(request):

    if(request.method == 'POST'):
        print(request.POST)

        name_form = request.POST.get('name') 
        email_form = request.POST.get('email' ) 

        filter_obj = All_Users.objects.all().filter(email_user__exact=email_form)
        print(filter_obj)
        if (list(filter_obj)):

                new_obj  = list(filter_obj)[0]
                prev_name =  new_obj.name_user
                new_obj.name_user = name_form
                new_obj.save()

                responseData = {
                    'msg' : f'Subscription already there for {email_form} , new name =  {name_form} , prev name =  {prev_name}'    
                }

                return HttpResponse(json.dumps(responseData), content_type="application/json")


        model_save = All_Users( name_user = name_form , email_user = email_form)
        model_save.save()

        responseData = {
            'msg' : f'Subscription added for {email_form}'
        }

        return HttpResponse(json.dumps(responseData), content_type="application/json")
        