import  express  from 'express';
const app = express()
const port = 3000

export async function multiply(x: number, y: number) {
  return x * y;
}

app.get('/', (req, res) => {
  res.send('Working');
})

app.listen(port);
