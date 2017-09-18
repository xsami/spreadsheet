# spreadsheet
Progresive web app for google spreadsheet management

# Prerequisites
You need to have installed:
1. Python 2.7
2. npm
3. pip/easy_pip
4. Have the following ports free: `3000` & `8000`

# How to run
1. Open your `terminal` or `command-line`
2. Using pip/easy_pip you need to install `pip install gspread oauth2client`
3. Change the directory to the API with `cd API\`
4. Install the following dependency `pip install django-cors-headers`
5. Run the API server `python manage.py runserver`
6. Change the directory of the client with `cd ..\spreadsheet_site\`
7. Run the command `npm install`
8. Run the command `npm start`
9. Open your browser on `localhost:3000`