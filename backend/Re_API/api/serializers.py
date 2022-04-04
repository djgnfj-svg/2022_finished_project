from rest_framework import serializers

from ..ER_API_utils import get_ER_api_data

from ..models import ER_Base_Model

class UserDataSerializer(serializers.ModelSerializer):
	class Meta:
		model = ER_Base_Model
		# fields = ('__all__')
		exclude = ("id",)

#todo postman으로 실험하기
class UserDataCreateSerializer(serializers.Serializer):
	nickname = serializers.CharField()
	remove_password = serializers.CharField()
	memo = serializers.CharField()

	def create(self, request, data, commit=True):
		instance = ER_Base_Model()
		instance.nickname = data.get("nickname", None)
		instance.remove_password = data.get("remove_password", None)
		instance.memo = data.get("memo", None)

		get_ER_api_data(instance)
		if commit:
			try:
				instance.save()
			except Exception as e:
				print(e)
			else:
				pass
		return instance
