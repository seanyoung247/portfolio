
from flask import Blueprint
from . import urls

def init(app):
    bp = Blueprint(name="api", import_name='api')

    urls.add_urls(bp)

    app.register_blueprint(bp)