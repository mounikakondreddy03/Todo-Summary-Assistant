const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error('Error connecting to MongoDB:', err));