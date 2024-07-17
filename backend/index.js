import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"; 
import userRoute from "./Routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
};

app.get('/', (req, res) => {
    res.send('API is working');
});

// Database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database is connected');
    } catch (err) {
        console.log('MongoDB database failed to connect');
        console.error('Detailed error:', err);
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute); //domain/api/v1/auth/register
app.use('/api/v1/users', userRoute); // Corrected route

app.listen(port, () => {
    connectDB();
    console.log('Server is running on port ' + port);
});
