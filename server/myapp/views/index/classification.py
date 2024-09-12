# Create your views here.
from django.db import connection
from rest_framework.decorators import api_view

from myapp.handler import APIResponse
from myapp.models import Classification
from myapp.serializers import ClassificationSerializer
from myapp.utils import dict_fetchall
from rest_framework.views import APIView

# cbv写法
class list_api(APIView):
    def get(self,request):
        print(123)
        classifications = Classification.objects.all().order_by('-create_time')
        serializer = ClassificationSerializer(classifications, many=True)
        return APIResponse(code=0, msg='查询成功', data=serializer.data)


# @api_view(['GET'])
# def list_api(request):
#     if request.method == 'GET':
#         print(123)
#         classifications = Classification.objects.all().order_by('-create_time')
#         serializer = ClassificationSerializer(classifications, many=True)
#         return APIResponse(code=0, msg='查询成功', data=serializer.data)





