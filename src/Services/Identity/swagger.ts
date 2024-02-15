import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Autenticação de Usuários',
      version: '1.0.0',
      description: 'Documentação da API de Autenticação de Usuários',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base da sua API
      },
    ],
  },
  apis: ['src/Services/Identity/Routes/*.ts'], // Caminho para os arquivos de definição das rotas da sua API

};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
