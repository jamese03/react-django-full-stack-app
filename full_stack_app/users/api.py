from .models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

#User Viewset
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer