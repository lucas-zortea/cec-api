import express from 'express';
import { pillarRouters } from './routes/pillars.routes';

const app = express();

app.use(express.json());

app.use("/pillars", pillarRouters);

app.listen(3333, () => console.log("Server is running!"));
