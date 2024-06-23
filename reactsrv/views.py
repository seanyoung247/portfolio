"""
Defines this apps view routes
"""

from flask import render_template, send_from_directory
# from flask.views import View


# class Index(View):
#     methods = ['GET',]
    
#     def dispatch_request(self):
#         return render_template('index.html')


def index():
    return render_template('index.html')


def favicon():
    return send_from_directory('./frontend', 'logo.svg')
