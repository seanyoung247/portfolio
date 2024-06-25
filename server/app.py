from flask import Flask
from dotenv import load_dotenv

import vite_react
import api


load_dotenv()


app = Flask(__name__,  static_folder=None)

api.init(app)
vite_react.init(app, '../frontend')


if __name__ == "__main__":
    app.run(debug=True)