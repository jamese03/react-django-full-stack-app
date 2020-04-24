from rest_framework import routers
from .api import PersonViewSet

router = routers.DefaultRouter()
router.register('api/person_example', PersonViewSet, 'person_example')

urlpatterns = router.urls