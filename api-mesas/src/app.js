require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const mesaRoutes = require('./routes/mesaRoutes');

const app = express();
app.use(express.json());
app.use('/mesas', mesaRoutes);

const PORT = process.env.PORT || 3004;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});