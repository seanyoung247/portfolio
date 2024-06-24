"""
Defines this apps view routes
"""

import os
from flask import render_template, send_from_directory
from . import settings

def index():
    """ Renders the react HTML template """
    return render_template('index.html')


def public(path):
    """ Serves public files """
    path = path.split("/")
    file_name = path[-1]
    dir_name = os.path.join(settings.ROOT_FOLDER, "/".join(path[:-1]))
    return send_from_directory(dir_name, file_name)
