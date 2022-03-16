


  export function metarInfoStr(hoursBeforeNow: number, stations: string[]) {
    let endpoint = "https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars";
    endpoint += `&requestType=retrieve`;
    endpoint += `&format=xml`;
    endpoint += `&stationString=` + stations.join("%20");
    endpoint += `&hoursBeforeNow=${hoursBeforeNow}`

    return endpoint;
  }

