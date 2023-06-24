import express from 'express';
import bodyParser from 'body-parser';
import apiKeyAuth from './middlewares/apiKeyAuth.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use(apiKeyAuth);

app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', () => {
  console.log(`Server started on ${host}:${port}`);
});
