import axios from "axios";
import { Parser } from "xml2js";
import { mapMetar } from "./mappers/metar-mapper.js";

export class MetarService {

  private endpoint = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars';

  async getMetar(hoursBefore: number, stations: string[]) {

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
            const mappedMetar = mapMetar(metar.METAR[0]);
            // console.log(JSON.stringify(mappedMetar));
            resolve(mappedMetar);

            if (error) {
              console.log(error);
            }
          });

        });
    });

  }
}

