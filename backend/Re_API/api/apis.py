from django.http import Http404
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from .serializers import UserDataCreateSerializer, UserDataSerializer
from ..models import ER_Base_Model
from rest_framework import exceptions
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
		return Response({"msg" : "test"},status=status.HTTP_400_BAD_REQUEST)

	def list(self, request, *args, **kwargs):
		queryset = self.get_queryset().all()
		if not queryset:
			error_msg = "데이터가 없습니다~"
			return Response({"msg" : error_msg}, status=status.HTTP_400_BAD_REQUEST)
		serializer = UserDataSerializer(queryset, many=True)
		return Response(serializer.data)

	def update(self, request, pk=None):
		print(request.data.get("remove_password"))
		serializer = UserDataCreateSerializer(data=request.data)
		if serializer.is_valid():
			rtn = serializer.change(request, serializer.data, pk)
			return Response(UserDataSerializer(rtn).data, status=status.HTTP_201_CREATED)
		#is_valid 하지 않으면
		return Response({"msg" : "test"},status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request,  pk=None,):
		remove_password = request.query_params.get("remove_password",None)
		if not remove_password:
			raise Http404
			# raise exceptions.ValidationError("비밀번호가 유효하지 않습니다.", status=status.HTTP_400_BAD_REQUEST)
		queryset = self.get_queryset().filter(id=pk, remove_password = remove_password)
		if not queryset.exists():
			raise Http404
		queryset.delete()
		return Response({"msg": "ok"})