import { SkyCondition } from './skycondition';

export class Metar {
    RawText : string;
    StationId : string;
    ObservationTime : Date;
    Latitude : number;
    Longitude : number;
    Temprature : number;
    Dewpoint : number;
    WindDirection : number;
    WindSpeed : number;
    Visibility : number;
    Altimeter : number;
    SkyConditions : SkyCondition[];
    FlightCategory : string;
    MetarType : string;
    Elevation : number;
}