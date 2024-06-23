import os
from . import urls

from flask import Blueprint


root_folder = None


def init(app, react_folder='build'):
    """
    Initiates this app and attaches it to the flask instance passed.
    """
    root_folder = react_folder

    bp = Blueprint( 
        name="reactsrv", import_name='reactsrv',
        template_folder=os.path.join(app.root_path, react_folder),
        static_folder=os.path.join(app.root_path, react_folder, 'assets')
    )

    urls.add_urls(bp)

    app.register_blueprint(bp)
    