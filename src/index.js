import express from "express";

//import routes
import calculatorRoutes from './routes/calculator-routes.js'

const app = express();
const port = 8000;

app.use(express.json());
app.use(calculatorRoutes);

app.listen(port, "0.0.0.0", () => {
    console.log(`Hexa backend app is listening on port ${port}`);
  });
