const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const weatherRouter = require('./Routes/weatherRoutes');
const createHttpError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');  

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware setup
app.use(cookieParser());  

const corsOptions = {
  origin: ["http://localhost:5173"], 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api", weatherRouter);

// 404 Not Found Middleware
app.use((req, res, next) => {
    next(createHttpError(404));
});

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).send({
        status: err.status || 500,
        message: err.message,
    });
};

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
