import express from 'express';
import MetarService from '../weather/metar/metar.service.js';
import { Metar } from '../weather/metar/models/metar.js';

import mongoose from 'mongoose'

const router = express.Router();
const ms = new MetarService();


router.get('/', async (req, res) => {

  


  if(!req.query || !req.query.stations || !req.query.hoursBefore)
  {
    res.send('error');
    return;
  }
  

  const stations = req.query.stations.toString().split("+");
  const hoursBefore = parseInt(req.query.hoursBefore.toString());

  const result =  await ms.getMetar(hoursBefore, stations);

  
  const metarSchema = new mongoose.Schema<Metar>({
    RawText : { type: String},
    StationId: { type: String},
    ObservationTime: { type: Date},
    Latitude: { type: Number},
    Longitude: { type: Number},
    Temprature: { type: Number},
    Dewpoint: { type: Number},
    WindDirection: { type: Number},
    WindSpeed: { type: Number},
    Visibility: { type: Number},
    Altimeter: { type: Number},        
    FlightCategory: { type: String},
    MetarType: { type: String},
    Elevation: { type: Number}
    
  });

  const metarModel = mongoose. model<Metar>('Metar', metarSchema);
  metarModel.create(result);
  mongoose.connect('mongodb://mongo:27017/docker-node-mongo').then(() => {
    new metarModel(result).save().then((doc) => {
      console.log('saved', doc);            
  
    } )
    .catch(err => console.log(err));
  });

  
  res.send(result);

});

export default router;
