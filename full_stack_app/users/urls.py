from rest_framework import routers
from .api import UserViewset

router = routers.DefaultRouter()
router.register('api/users', UserViewset, 'users')

urlpatterns = router.urls