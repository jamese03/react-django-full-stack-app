from rest_framework import routers
from .api import PersonViewSet

router = routers.DefaultRouter()
router.register('api/user', PersonViewSet, 'user')

urlpatterns = router.urls