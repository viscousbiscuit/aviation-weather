import { MetarService } from "./weather/metar/metar.service.js";


export async function multiply(x : number, y : number) {
  return x*y;
}

const ms = new MetarService();
ms.getMetar(1, ["KBUR"]).then((result) => {
  console.log(result);
});


