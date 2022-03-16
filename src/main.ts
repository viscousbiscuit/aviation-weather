import { MetarService } from "./weather/metar/metar.service.js";
import {Parser} from 'xml2js';



export async function multiply(x : number, y : number) {
  return x*y;
}

const jsonParser = new Parser();


const ms = new MetarService();

ms.getMetar(1, ['KBUR']).then((value) => {

  jsonParser.parseString(value.data, (err, result) => {
    console.log(result.response.data[0]);
    console.log(err);

  });

});
