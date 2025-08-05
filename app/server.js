const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = process.env.MONGO_DB_NAME || 'testdb';
const user = process.env.MONGO_USERNAME || 'admin';
const pass = process.env.MONGO_PASSWORD || 'admin123';

const mongoURL = `mongodb://${user}:${pass}@mongo-service:27017/${db}?authSource=admin`;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send("MongoDB Connected! Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});