
from . import views

def add_urls(bp):
    bp.add_url_rule(rule="/api/test", view_func=views.TestAPI.as_view('test'))