from ratelimit.decorators import ratelimit

from rest_framework import serializers, exceptions

from ..ER_API_utils import set_ER_api_data
from ..models_utils import instance_save

from ..models import ER_Base_Model

class UserDataSerializer(serializers.ModelSerializer):
	class Meta:
		model = ER_Base_Model
		fields = ('__all__')

class UserDataCreateSerializer(serializers.Serializer):
	nickname = serializers.CharField()
	remove_password = serializers.CharField()
	memo = serializers.CharField()

	@ratelimit(key="ip", rate="1/m")
	def create(self, request, data, commit=True):
		instance = ER_Base_Model()
		
		instance.nickname = data.get("nickname", None)
		instance.remove_password = data.get("remove_password", None)
		instance.memo = data.get("memo", None)

		set_ER_api_data(instance)
		instance_save(instance, commit)
		return instance
	
	def change(self, request, data, id, commit=True):
		instance = ER_Base_Model.objects.filter(id=id).first()
		if instance.remove_password != data.get("remove_password",None):
			raise exceptions.ValidationError({"error_msg" : "비밀번호가 일치하지 않습니다."})
		
		instance.memo = data.get("memo", None)
		instance_save(instance, commit)
		return instance		