from django.urls import path, include
from website.views.index import index

urlpatterns=[
    path("", index, name="whole"),
    path("menu/", include("website.urls.menu.index")),
    path("mainground/", include("website.urls.mainground.index")),
    path("setting/", include("website.urls.setting.index")),
]
