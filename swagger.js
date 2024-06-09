const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Constuction website API',
    description: 'Description'
  },
  host: '195.35.20.235'
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);