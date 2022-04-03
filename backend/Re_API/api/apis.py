from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework import status
from .serializers import CharBaseSerializer, UserDataCreateSerializer, UserDataSerializer
from ..models import ER_Base_Model, ER_Char_status

class CharViewSet(viewsets.ModelViewSet):
	queryset = ER_Char_status.objects.filter().order_by("id")
	serializer_class = CharBaseSerializer
	# permission_classes = [permissions.IsAuthenticated]

	def list(self, request, *args, **kwargs):
		queryset = self.get_queryset().all()
		if not queryset:
			error_msg = "데이터가 없습니다~"
			Resee_data = {
				"status" :400,
				"msg" : error_msg
			}
			return Response({"msg" : error_msg})
		serializer = CharBaseSerializer(queryset, many=True)
		return Response(serializer.data)

class UserDataViewSet(viewsets.ModelViewSet):
	queryset = ER_Base_Model.objects.filter().order_by("id")
	serializer_class = UserDataSerializer
	# permission_classes = [permissions.IsAuthenticated]

	def create(self, request):
		serializer = UserDataCreateSerializer(data=request.data)
		if serializer.is_valid():
			rtn = serializer.create(request, serializer.data)
			if rtn:
				return Response(UserDataSerializer(rtn).data, status=status.HTTP_201_CREATED)
		#is_valid 하지 않으면
		else:
			Resee_data = {
				"status" :400,
				"msg" : "test"
			}

		return Response(Resee_data)

	def list(self, request, *args, **kwargs):
		queryset = self.get_queryset().all()
		if not queryset:
			error_msg = "데이터가 없습니다~"
			Resee_data = {
				"status" :400,
				"msg" : error_msg
			}
			return Response({"msg" : error_msg})
		serializer = UserDataSerializer(queryset, many=True)
		return Response(serializer.data)

#전체적인과정

# -> 클라이언트에서 유저네임을 입력한다.
# -> 그데이터를 가지고 createsirializer에서 하나 생성한다 ()
# -> 그데이터를 리턴해준다.
