import { Metar } from "../models/metar.js";
import { SkyCondition } from "../models/skycondition.js";

/**
 * 
 * @param metar A parsed javascript object from the NOAA xml response.
 * @returns 
 */
export function mapMetar(metar: any) : Metar {  

  if(!metar) {
    throw 'You must pass in a valid object';
  }


  const nmtr = new Metar();
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

  metar.sky_condition.forEach((v) => {

      const skyCondition = new SkyCondition();
      skyCondition.CloudBaseFtAgl = parseInt(v.$.cloud_base_ft_agl);
      skyCondition.SkyCover = v.$.sky_cover;
      nmtr.SkyConditions.push(skyCondition);

  });

  return nmtr;
}
