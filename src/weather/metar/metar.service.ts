import axios from "axios";
import { Parser } from "xml2js";
import { mapMetar } from "./mappers/metar-mapper.js";
import { Metar } from "./models/metar.js";

export default class MetarService {

  private endpoint = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars';

  /**
   * 
   * @param hoursBefore Get a metar for x number of hours before the current time.
   * @param stations The list of stations you want a Metar for ie. KWHP, KBUR
   * @returns 
   */
  async getMetar(hoursBefore: number, stations: string[]) : Promise<Metar[]> {

    if (stations.length <= 0) {
      throw 'You must provide at least one station';
    }

    return new Promise((resolve) => {

      axios
        .get(this.endpoint, {
          params: {
            requestType: "retrieve",
            format: "xml",
            stationString: stations.join("%20"),
            hoursBeforeNow: hoursBefore
          }
        })
        .then((result) => {


          const jsonParser = new Parser();

          jsonParser.parseString(result.data, (error, result) => {
            const metar = result.response.data[0]

            const metars: Metar[] = [];
            if (metar.METAR && Array.isArray(metar.METAR)) {
              metar.METAR.forEach((metar: any) => {
                metars.push(mapMetar(metar));
              });
            }

            resolve(metars);

            if (error) {
              console.log(error);
            }
          });

        });
    });

  }

}

