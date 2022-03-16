import axios from "axios";

export class MetarService {

  private endpoint = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars';

  async getMetar(hoursBefore: number, stations: string[]) {

    return axios
      .get(this.endpoint, {
        params: {
          requestType: "retrieve",
          format: "xml",
          stationString: stations.join("%20"),
          hoursBeforeNow: hoursBefore
        }
      });


  }

}
