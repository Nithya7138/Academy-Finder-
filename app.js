



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import academicRoute from './app/api/academic/route.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const dbconnect = process.env.ATLASMONGODB_URI;
const dbconnect = process.env.MONGODB_LOCAL && process.env.MONGODB_LOCAL;
mongoose.connect(dbconnect);
const conn = mongoose.connection;

conn.once('open', () => {
  console.log('Connected to  MongoDB');
});
conn.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});


app.get('/', (req, res) => {
  res.send('academic');
});

academicRoute(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

