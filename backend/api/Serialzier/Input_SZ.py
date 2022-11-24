from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from api.Utils.diet_calculator import Calculation

class Input_SZ(serializers.Serializer):
    # choice로 할지는 고민
    gender = serializers.CharField(max_length=2)
    weight = serializers.FloatField(max_value=300)
    height = serializers.FloatField(max_value=200)
    general_activities = serializers.FloatField(min_value=1.2, max_value=1.6)
    excise_activity = serializers.FloatField(min_value=0, max_value=0.3)
    age = serializers.IntegerField(min_value=13, max_value=150)
    many_meals = serializers.IntegerField(min_value=2, max_value=3)
    
    def create(self, request, validated_data):
        instance = {}
        meals = validated_data["many_meals"]
        cal = Calculation()
        instance["total_kilo_calorie"] = cal.total_kilo_calorie(validated_data)
        instance["total_protein"] = cal.total_protein(validated_data)
        instance["total_fat"] =  cal.total_fat(instance["total_kilo_calorie"])
        instance["total_carbohydrate"] = cal.total_carbohydrate(instance)
        for i in range(1, meals + 1) :
            instance[str(i) + "_meals"] = {}
            instance[str(i) + "_meals"]["kilo_calorie"] = instance["total_kilo_calorie"] / meals
            instance[str(i) + "_meals"]["protein"] = instance["total_protein"]/ meals
            instance[str(i) + "_meals"]["fat"] = instance["total_fat"] / meals
            instance[str(i) + "_meals"]["carbohydrate"] = instance["total_carbohydrate"] / meals
        return instance

    # def validate_gender(self, value):
    #     if "M" not in value:
    #         raise ValidationError("성별 데이터가 잘못됬습니다.")
    #     return value