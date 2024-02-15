import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './Routes/authRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota para acessar a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API');
});

// Rotas de autenticação
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
