import { MetarService } from "./weather/metar/metar.service.js";
import {Parser} from 'xml2js';
import { mapMetar } from "./weather/metar/mappers/metar-mapper.js";




export async function multiply(x : number, y : number) {
  return x*y;
}

const jsonParser = new Parser();


const ms = new MetarService();

ms.getMetar(1, ['KBUR']).then((value) => {

  jsonParser.parseString(value.data, (error, result) => {

    const metar = result.response.data[0]
    const mappedMetar = mapMetar(metar.METAR[0]);
    console.log(JSON.stringify(mappedMetar));

    if(error) {
      console.log(error);
    }


  });

});
