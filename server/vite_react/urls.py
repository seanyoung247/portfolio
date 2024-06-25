"""
Defines the url routes managed by this app
"""
from . import views


def add_urls(bp):
    """
    Registers routes handled by this app
    """
    bp.add_url_rule(rule="/<path:path>", view_func=views.public)
    bp.add_url_rule(rule='/', view_func=views.index)
