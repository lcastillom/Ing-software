require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const usuarioRoutes = require('./routes/userRoutes');
const sequelize = require('./models/sequelize');
const app = express();
const port = process.env.PORT || 3001;
const baseUrl = `http://${process.env.URL}`;

// Middleware to parse JSON bodies
app.use(express.json());

// Configura CORS para permitir solicitudes desde múltiples orígenes
const allowedOrigins = process.env.ORIGINS.split(',');

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `El origen ${origin} no está permitido por la política CORS`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Usar rutas importadas
app.use('/api', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('API de usuarios está funcionando correctamente');
});

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'API para gestionar usuarios',
    },
    servers: [
      {
        url: `${baseUrl}:${port}`,
      },
    ],
  },
  apis: [
    './src/routes/userRoutes.js',
    './src/app.js'
  ],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Manejo de errores: todos los errores en formato JSON
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Internal Server Error',
    details: err.details || undefined
  });
});

// Create HTTP server
app.listen(port, () => {
    console.log(`HTTP Server está corriendo en ${baseUrl}:${port}`);
});

// Sincroniza el modelo con la base de datos al iniciar la app
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a MySQL establecida correctamente.');
    return;
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });