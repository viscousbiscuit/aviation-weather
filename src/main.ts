import express from "express";

import home from "./routes/home.js";
import metar from "./routes/metar.js";

const app = express();
const port = 3000

app.use('/', home);
app.use('/metar', metar);

app.listen(port);
