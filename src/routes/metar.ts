import express from 'express';
import MetarService from '../weather/metar/metar.service.js';

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
  res.send(result);

});

export default router;
