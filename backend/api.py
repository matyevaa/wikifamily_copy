from flask import Flask, render_template
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin
import json
import base64
import mysql.connector

app = Flask(__name__)
cors = CORS(app)

cnx = mysql.connector.connect(
    host = 'localhost',
    user = 'wikifamily_user',
    password = 'wikipassword',
    database = 'wikifamily_db',
    auth_plugin = 'mysql_native_password'
    )

cursor = cnx.cursor()

@app.route('/create', methods=['GET'])
def get_family():
    cursor.execute("SELECT * FROM individual")
    row_headers = [x[0] for x in cursor.description]
    data = cursor.fetchall()
    json_data = []
    for result in data:
        json_data.append(dict(zip(row_headers, result)))
    return json.dumps(json_data)

#@app.route('/create', methods=['POST'])
#def add_person():
#    cur = mysql.get_db().cursor()
#    name = request.get_json()['name']

#    cur.execute("INSERT INTO db_family.family (name) VALUES ('" + str(name) + "')")
#    mysql.connection.commit()
#    result = {'name':name}
#
#    return jsonify({"result": result})
#

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
