



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
const dbconnect = "mongodb+srv://nithyaprasadk01:Nithya%4070@cluster0.vd5k3sh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
";

if (!dbconnect) {
  console.error('MongoDB connection string not found. Please check your .env.local file.');
  process.exit(1);
}

console.log('Connecting to MongoDB...');
mongoose.connect(dbconnect);
const conn = mongoose.connection;

conn.once('open', () => {
  console.log('Connected to  MongoDB');
});
conn.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});


app.get('/', (req, res) => {
  res.send('Academy Finder API is running');
});

academicRoute(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

