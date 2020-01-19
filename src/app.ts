import { Request, Response } from 'express';
import express = require('express');
import { MetarEndpoint } from './endpoints/metar';




const app = express();

app.get('/', function (req, res) {
    res.send('Hello bWorld')
})

app.get("/metar", (req, res) => {
    var me = new MetarEndpoint();
    me.GetMetar(req, res);
});


app.listen(3000)

/*


var parseString = require('xml2js').parseString;
const https = require("https");
const fs = require("fs");

import { Observable, BehaviorSubject } from 'rxjs';
import { Metar } from './aviationweather/metar';
import { SkyCondition } from './aviationweather/skycondition';

const myBs$ = new BehaviorSubject<String>("");
const myOs$ = new Observable<String>((a) => {
console.log(a);
console.log("observable subscribed.");
});

myOs$.subscribe();



var response = '';

var requestUrl = metarInfoStr(2, ["KSEA"]);

https.get(requestUrl,
    (res) => {

        res.on("data", (chunk) => {
            response += chunk;
        });

        res.on('end', () => {
            parseString(response.toString(), (rr, res) => {
                var metars = res.response.data[0].METAR;

                let newMetars: Metar[];

                metars.forEach((val, index) => {
                    var nmtr = new Metar();
                    if (val.sky_condition && val.sky_condition.length) {
                        nmtr.SkyConditions = new Array<SkyCondition>();
                    }
                    nmtr.Altimeter = val.altim_in_hg;
                    nmtr.RawText = val.raw_text[0];
                    nmtr.StationId = val.station_id[0];
                    nmtr.ObservationTime = new Date(val.observation_time[0]);
                    nmtr.Latitude = parseFloat(val.latitude[0]);
                    nmtr.Longitude = parseFloat(val.longitude[0]);
                    nmtr.Temprature = parseFloat(val.temp_c[0]);
                    nmtr.Dewpoint = parseFloat(val.dewpoint_c[0]);
                    nmtr.WindDirection = parseInt(val.wind_dir_degrees[0]);
                    nmtr.WindSpeed = parseInt(val.wind_speed_kt[0]);
                    nmtr.Visibility = parseFloat(val.visibility_statute_mi[0]);
                    nmtr.Altimeter = parseFloat(val.altim_in_hg[0]);
                    //;
                    nmtr.FlightCategory = val.flight_category[0];
                    nmtr.MetarType = val.metar_type[0];
                    nmtr.Elevation = parseFloat(val.elevation_m[0]);

                    val.sky_condition.forEach((v, i) => {

                        let skyCondition = new SkyCondition();

                        skyCondition.CloudBaseFtAgl = parseInt(v.$.cloud_base_ft_agl);
                        skyCondition.SkyCover = v.$.sky_cover;
                        nmtr.SkyConditions.push(skyCondition);
                    });




                    console.log(val);
                });
            })
        });
    });

function metarInfoStr(hoursBeforeNow, stations) {
    var endpoint = "https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars";
    endpoint += `&requestType=retrieve`;
    endpoint += `&format=xml`;
    endpoint += `&stationString=` + stations.join("%20");
    endpoint += `&hoursBeforeNow=${hoursBeforeNow}`

    return endpoint;
}

*/