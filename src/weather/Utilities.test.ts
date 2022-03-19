import { CompassCardinal, calculateCardinal } from "./Utilities.js";

const cardinal = CompassCardinal;
describe('Compass Cardinals', () => {
  it('North should be north', () => {
    expect(calculateCardinal(360)).toBe(cardinal.N);    
  });

  it('North-Northeast should be North-Northeast', () => {
    expect(calculateCardinal(14)).toBe(cardinal.NNE);    
  });

  it('Northeast should be Northeast', () => {
    expect(calculateCardinal(40)).toBe(cardinal.NE);    
  });

  it('East-Northeast should be East-Northeast', () => {
    expect(calculateCardinal(62)).toBe(cardinal.ENE);    
  });

  it('East should be East', () => {
    expect(calculateCardinal(82)).toBe(cardinal.E);    
  });

  it('East-Southeast should be East-Southeast', () => {
    expect(calculateCardinal(115)).toBe(cardinal.ESE);    
  });

  it('Southeast should be Southeast', () => {
    expect(calculateCardinal(133)).toBe(cardinal.SE);    
  });

  it('South-Southeast should be South-Southeast', () => {
    expect(calculateCardinal(151)).toBe(cardinal.SSE);    
  });

  it('South should be South', () => {
    expect(calculateCardinal(169)).toBe(cardinal.S);    
  });

  it('South-Southwest should be South-Southwest', () => {
    expect(calculateCardinal(200)).toBe(cardinal.SSW);    
  });
  it('Southwest should be Southwest', () => {
    expect(calculateCardinal(216)).toBe(cardinal.SW);    
  });
  it('West-Southwest should be West-Southwest', () => {
    expect(calculateCardinal(240)).toBe(cardinal.WSW);    
  });
  it('West should be West', () => {
    expect(calculateCardinal(263)).toBe(cardinal.W);    
  });
  it('West-Northwest should be West-Northwest', () => {
    expect(calculateCardinal(290)).toBe(cardinal.WNW);    
  });
  it('Northwest should be Northwest', () => {
    expect(calculateCardinal(308)).toBe(cardinal.NW);    
  });
  it('North-Northwest should be North-Northwest', () => {
    expect(calculateCardinal(330)).toBe(cardinal.NNW);    
  });
  it('Variable should be variable', () => {
    expect(calculateCardinal(380)).toBe(cardinal.VAR);    
  });


});
