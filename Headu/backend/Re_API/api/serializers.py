
from rest_framework import serializers, exceptions
from rest_framework.throttling import UserRateThrottle

from .serializers_utils import check_troller

from ..error_utils import ER_error_msg

from ..ER_API_utils import set_ER_api_data
from ..models_utils import instance_save

from ..models import ER_Base_Model, ER_Trolls_Models

class UserDataSerializer(serializers.ModelSerializer):
	winning_rate = serializers.FloatField(read_only=True)
	
	#평균 ada
	averageKills = serializers.FloatField(read_only=True)
	averageHunts = serializers.FloatField(read_only=True)
	averageAssistants = serializers.FloatField(read_only=True)

	#티어
	soloTier = serializers.CharField(max_length=10, read_only=True)
	duoTier = serializers.CharField(max_length=10, read_only=True)
	squadTier = serializers.CharField(max_length=10, read_only=True)
	most_pick = serializers.JSONField(default='{}', read_only=True)
	class Meta:
		model = ER_Base_Model
		fields = ('__all__')

class UserDataCreateSerializer(serializers.Serializer):
	nickname = serializers.CharField()
	remove_password = serializers.CharField()
	memo = serializers.CharField()
	throttle_classes = [UserRateThrottle]

	def create(self, request, data, commit=True):
		instance = ER_Base_Model()
		
		instance.nickname = data.get("nickname", None)
		if check_troller(instance.nickname):
			raise exceptions.ValidationError(ER_error_msg(4),code=400)
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

class Trolls_DataSerializer(serializers.ModelSerializer):
	ven_count = serializers.IntegerField(read_only=True)
	class Meta :
		model = ER_Trolls_Models
		fields = ('__all__')

class Trolls_Data_CreateSerializer(serializers.Serializer):
	nickname = serializers.CharField()
	memo = serializers.CharField()
	throttle_classes = [UserRateThrottle]

	def create(self, request, data, commit=True):
		# 거기서 보낸값을 data로 받는다
		nickname = data.get("nickname", None)
		memo = data.get("memo", None)
		# 일단 듀오에 등록한 적이 있는지 검색
		temp = ER_Base_Model.objects.filter(nickname=nickname).first()
		if not temp:
			raise exceptions.ValidationError(ER_error_msg(2),code=400)
		# 있다면 트롤 유저 데이터 베이스를 생성한다.
		# 처음이 아니라면
		instance = ER_Trolls_Models.objects.filter(nickname=nickname).first() 
		if not instance:
			instance = ER_Trolls_Models()

		instance.nickname = nickname
		instance.memo[instance.ven_count+1] = memo
		instance.trolls_count_up()
		instance_save(instance, commit)
		
		return instance