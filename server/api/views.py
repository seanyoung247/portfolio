
from flask.views import MethodView

class TestAPI(MethodView):
    def get(self):
        return 'TEST API Data'