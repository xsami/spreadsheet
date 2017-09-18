from django.http import JsonResponse, HttpResponse
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json
from django.conf import settings

def index(request):
    return HttpResponse('<h3>Welcome Message</h3>')

def getAllData(request):
    FILE_NAME = 'demo' # file name on google drive

    scope = ['https://spreadsheets.google.com/feeds']
    creds = ServiceAccountCredentials.from_json_keyfile_name('spreadsheet/credentials/client_secret.json', scope)
    client = gspread.authorize(creds)

    sheet = client.open(FILE_NAME).sheet1
    data = sheet.get_all_records()

    return JsonResponse(data, safe=False)