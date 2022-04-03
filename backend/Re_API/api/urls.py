from django.urls import path
from rest_framework import routers


from .apis import CharViewSet, UserDataViewSet

router = routers.DefaultRouter()
router.register(r'Userdata', UserDataViewSet, basename="api_user")
# router.register(r'UserCreatedata', UserDataCreateSerializer, basename="api_user")
router.register(r'Char', CharViewSet, basename="api_char")
