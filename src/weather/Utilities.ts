
enum CompassCardinal {
    N,
    NNE,
    NE,
    ENE,    
    E,
    ESE,
    SE,
    SSE,
    S,
    SSW,
    SW,
    WSW,
    W,
    WNW,
    NW,
    NNW,
    VAR
    }

function calculateCardinal (windDirection : number) : CompassCardinal {
    

    if((windDirection >= 349 && windDirection <= 360) || (windDirection >= 0 && windDirection <= 11))
    {
        return CompassCardinal.N;
    }
    if(windDirection >= 12 && windDirection <= 33)
    {        
        return CompassCardinal.NNE;
    }
    if(windDirection >= 34 && windDirection <= 56)
    {        
        return CompassCardinal.NE;
    }
    if(windDirection >= 57 && windDirection <= 78)
    {        
        return CompassCardinal.ENE;
    }
    if(windDirection >= 79 && windDirection <= 101)
    {        
        return CompassCardinal.E;
    }
    if(windDirection >= 102 && windDirection <= 123)
    {        
        return CompassCardinal.ESE;        
    }
    if(windDirection >= 124 && windDirection <= 146)
    {        
        return CompassCardinal.SE;
    }
    if(windDirection >= 147 && windDirection <= 168)
    {        
        return CompassCardinal.SSE;
    }
    if(windDirection >= 169 && windDirection <= 191)
    {        
        return CompassCardinal.S;
    }
    if(windDirection >= 192 && windDirection <= 213)
    {        
        return CompassCardinal.SSW;
    }
    if(windDirection >= 214 && windDirection <= 236)
    {        
        return CompassCardinal.SW;
    }
    if(windDirection >= 237 && windDirection <= 258)
    {        
        return CompassCardinal.WSW;
    }
    if(windDirection >= 259 && windDirection <= 281)
    {        
        return CompassCardinal.W;
    }
    if(windDirection >= 282 && windDirection <= 303)
    {        
        return CompassCardinal.WNW;
    }
    if(windDirection >= 304 && windDirection <= 326)
    {        
        return CompassCardinal.NW;
    }
    if(windDirection >= 327 && windDirection <= 348)
    {        
        return CompassCardinal.NNW;
    }

    return CompassCardinal.VAR;
}

export { calculateCardinal, CompassCardinal };