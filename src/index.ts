import express, { Application } from "express"
import { personalController } from "./controllers/personal.controller";

const PORT = 3000;

const app: Application = express();

app.get('/', personalController.get)

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))