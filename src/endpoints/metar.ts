import { SkyCondition } from '../models/skycondition';
import { Metar } from '../models/metar';
import { Request, Response } from 'express';
var parseString = require('xml2js').parseString;
const https = require("https");

var parseString = require('xml2js').parseString;


export class MetarEndpoint {

    constructor() {
    }

    public GetMetar(httpRequest: Request, httpResponse: Response) {

        var metarEndpoint = this.metarInfoStr(1, ["KWHP", "KVNY"]);
        var response = '';  
        https.get(metarEndpoint,
        (res) => {

            res.on("data", (chunk) => {
                response += chunk;
            });

            res.on('end', () => {
                parseString(response.toString(), (rr, res) => {
                    var metars = res.response.data[0].METAR;
                    console.log(metars);
                    let newMetars: Metar[];
                });
            })
        });
    }

    /*
          https.get(metarEndpoint),
            (res) => {

                res.on("data", (chunk) => {
                    response += chunk;
                });

                res.on('end', () => {
                    parseString(response.toString(), (rr, res) => {
                        var metars = res.response.data[0].METAR;
                        console.log(metars);
                        let newMetars: Metar[];
                    });
                })
            });
            */

    metarInfoStr(hoursBeforeNow: number, stations: string[]) {
        var endpoint = "https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars";
        endpoint += `&requestType=retrieve`;
        endpoint += `&format=xml`;
        endpoint += `&stationString=` + stations.join("%20");
        endpoint += `&hoursBeforeNow=${hoursBeforeNow}`

        return endpoint;
    }

    parseMetar(metar: any) {

        var nmtr = new Metar();
        if (metar.sky_condition && metar.sky_condition.length) {
            nmtr.SkyConditions = new Array<SkyCondition>();
        }
        nmtr.Altimeter = metar.altim_in_hg;
        nmtr.RawText = metar.raw_text[0];
        nmtr.StationId = metar.station_id[0];
        nmtr.ObservationTime = new Date(metar.observation_time[0]);
        nmtr.Latitude = parseFloat(metar.latitude[0]);
        nmtr.Longitude = parseFloat(metar.longitude[0]);
        nmtr.Temprature = parseFloat(metar.temp_c[0]);
        nmtr.Dewpoint = parseFloat(metar.dewpoint_c[0]);
        nmtr.WindDirection = parseInt(metar.wind_dir_degrees[0]);
        nmtr.WindSpeed = parseInt(metar.wind_speed_kt[0]);
        nmtr.Visibility = parseFloat(metar.visibility_statute_mi[0]);
        nmtr.Altimeter = parseFloat(metar.altim_in_hg[0]);
        nmtr.FlightCategory = metar.flight_category[0];
        nmtr.MetarType = metar.metar_type[0];
        nmtr.Elevation = parseFloat(metar.elevation_m[0]);

        metar.sky_condition.forEach((v, i) => {

            let skyCondition = new SkyCondition();
            skyCondition.CloudBaseFtAgl = parseInt(v.$.cloud_base_ft_agl);
            skyCondition.SkyCover = v.$.sky_cover;
            nmtr.SkyConditions.push(skyCondition);

        });

        return nmtr;
    }
}