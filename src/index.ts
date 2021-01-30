import express, { Application } from "express"
import { personalController } from "./controllers/personal.controller";
import mongoose from "mongoose";

const PORT = 4000;

//configue connection to mongo data base
const url = 'mongodb://localhost:27017/personal'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(()=> console.log('connect'))
  .catch((error) => console.error(error));


const app: Application = express();

app.use(express.json());

app.get('/personal', personalController.get)
app.get('/personal/getbyemail/:email', personalController.getByEmail)
app.get('/personal/delete/:email', personalController.delete);
app.delete('/personal/delete/:email', personalController.delete);
app.post('/personal/add', personalController.add);
app.post('/personal/update/:email', personalController.update);

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))