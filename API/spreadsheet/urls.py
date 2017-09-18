from django.conf.urls import url
from spreadsheet.views import sheets as st

urlpatterns = [
    url(r'^$', st.index),
    url(r'^getAllData/$', st.getAllData),
]