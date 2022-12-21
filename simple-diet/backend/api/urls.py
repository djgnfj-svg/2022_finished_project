from rest_framework import routers

from api.Views.DietViewset import DietViewSet

router = routers.DefaultRouter()
router.register(r'diet_calculator', DietViewSet, basename="diet") # admin이 음식을 추가할때