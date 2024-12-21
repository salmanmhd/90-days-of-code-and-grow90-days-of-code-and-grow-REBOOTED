import express from 'express';
import { router as mainRouter } from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1', mainRouter);

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
