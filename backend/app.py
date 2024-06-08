import os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import requests
import numpy as np
import pickle
from utils import crop_rec
from utils import fertilizer_rec

load_dotenv()

crop_recommendation_model_path = "backend/models/NaiveBaise.pkl"
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

def weather_fetch(city):
    api_key = os.getenv("API_KEY")
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    url = base_url + "appid=" + api_key + "&q=" + city
    res = requests.get(url)
    d = res.json()

    if d["cod"] != "404":
        data = d["main"]
        temp = round((data["temp"] - 273.15), 2)
        hum = data["humidity"]
        return temp, hum
    else:
        return None

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/crop', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def crop():
    data = request.json

    N = int(data['n'])
    P = int(data['p'])
    K = int(data['k'])
    pH = float(data['pH'])
    state = data['state']
    dist = data['dist']

    city = state+', '+dist

    if weather_fetch(city) != None:
        Temp, Humidity = weather_fetch(city)
        query = np.array([[N, P, K, Temp, Humidity, pH]])
        response = crop_recommendation_model.predict(query)
        res = crop_rec.get_crops(response[0])
        result = ', '.join([i.title() for i in res])


        rec = f'''Showing recommendations for:<br/><br/>
        <b>N: </b>{N} | <b>P: </b>{P} | <b>K: </b>{K}<br/> 
        <b>pH: </b>{pH}<br/>
        <b>State: </b>{state}<br/>
        <b>District: </b>{dist}<br/>
        <br/><hr/><br/>
        <b>Crops: </b>{result}<br/>'''
        return jsonify({'result': rec})
    else:
        return jsonify({'error': 'unable to fetch weather stats.'})

@app.route('/fertilizer', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def fertilizer():
    data = request.json

    SN = float(data['n'])
    SP = float(data['p'])
    SK = float(data['k'])
    crop = str(data['crop'])
    state = str(data['state'])
    district = str(data['district'])
    T = float(data['target'])

    var = fertilizer_rec.get_var(crop.lower(), state.lower(), district.lower())

    FN = round((var['a1']*T)-(var['b1']*SN), 2)
    FP = round((var['a2']*T)-(var['b2']*SP), 2)
    FK = round((var['a3']*T)-(var['b3']*SK), 2)

    FN = FN if FN >= 0 else 0
    FP = FP if FP >= 0 else 0
    FK = FK if FK >= 0 else 0

    result = f'''Showing recommendations for:<br/><br/>
    <b>Crop:</b> {crop}<br/>
    <b>State:</b> {state}<br/>
    <b>District:</b> {district}<br/>
    <br/><hr/><br/>
    <b>N</b>: {FN} kg/HA <br/><br/> 
    <b>P2O5</b>: {FP} kg/HA <br/><br/> 
    <b>K2O</b>: {FK} kg/HA <br/>
    <br/><hr/><br/> 
    <small>*As per STCR fertilizer recommendation equations.</small>'''
    return jsonify({'result': result})

@app.route('/')
@cross_origin(supports_credentials=True)
def hello():
    return '<h1>Server is running...</h1>'

if __name__ == "__main__":
    app.run(debug=True)