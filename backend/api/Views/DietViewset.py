from rest_framework import status, viewsets
from rest_framework import mixins
from rest_framework.response import Response

from api.Serialzier.Input_SZ import Input_SZ
from api.Utils.msg_utils import error_msg

class DietViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = Input_SZ

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(rtn, status=status.HTTP_200_OK)
        print(serializer.errors)
        return Response(error_msg(serializer=serializer), status=status.HTTP_400_BAD_REQUEST)

    