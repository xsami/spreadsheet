from django.http import JsonResponse, HttpResponse

def index(request):
    return HttpResponse('<h3>Welcome Message</h3>')

def getAllUsers(request):
    if request.method == 'GET':
        name = ['jhon', 'francky', 'steve', 'jenny', 'will']
        return JsonResponse({'users': name})
    return JsonResponse({'error': 'invalid request type'})