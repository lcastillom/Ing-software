require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const menuRoutes = require('./routes/menuRoutes');
const sequelize = require('./models/sequelize');
const app = express();
const port = process.env.PORT || 3002;
const baseUrl = `http://${process.env.URL}`;

// Middleware to parse JSON bodies
app.use(express.json());

// Configura CORS para permitir solicitudes desde múltiples orígenes
const allowedOrigins = process.env.ORIGINS.split(',');

// Configura CORS para permitir solicitudes desde el origen de tu aplicación de front-end
app.use(cors({
  origin: function (origin, callback) {
    // Permite solicitudes sin origen (como las de herramientas de desarrollo)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `El origen ${origin} no está permitido por la política CORS`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Usar rutas importadas
app.use('/api', menuRoutes);

app.get('/', (req, res) => {
  res.send('API de menus esta funcionando correctamente');
});

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Menus',
      version: '1.0.0',
      description: 'API para gestionar menus',
    },
    servers: [
      {
        url: `${baseUrl}:${port}`,
      },
    ],
  },
  apis: [
    './src/routes/menuRoutes.js',
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

// Create HTTP server - hosting service add SSL/TLS
app.listen(port, () => {
    console.log(`HTTP Server esta corriendo en ${baseUrl}:${port}`);
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

