
"""
Defines app setting variables
"""

from os import environ

ROOT_FOLDER = None
DEVELOPMENT = environ.get('DEBUG') == 'DEVELOPMENT'
