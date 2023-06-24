import express from 'express';
import bodyParser from 'body-parser';
import apiKeyAuth from './app/middlewares/apiKeyAuth.js';
import userRoutes from './app/routes/userRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use(apiKeyAuth);

app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server started on ${host}:${port}`);
});
