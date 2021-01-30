import express, { Application } from "express"
import { personalController } from "./controllers/personal.controller";

const PORT = 3000;

const app: Application = express();

app.use(express.json());

app.get('/personal', personalController.get)
app.get('/personal/getbyemail/:email', personalController.getByEmail)
app.get('/personal/delete/:email', personalController.delete);
app.delete('/personal/delete/:email', personalController.delete);
app.post('/personal/add', personalController.add);
app.post('/personal/update', personalController.update);

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))