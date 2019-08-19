
from tabiriapp.serializers import UserSerializer
#ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
        queryset = User.objects.all()
        serializer_class = UserSerializer