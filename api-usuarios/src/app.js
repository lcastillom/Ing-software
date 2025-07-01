const express = require('express');
const { setUserRoutes } = require('./routes/userRoutes');
const connectDB = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
setUserRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});