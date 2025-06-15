import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from 'F:\Appoinment_Booking_Sysytem\backend\config\mongodb.js';

//app config
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());
connectDB();

//api endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!greate');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the app for testing purposes