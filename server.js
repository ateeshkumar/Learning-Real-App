const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connctDb = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const contentRoutes = require('./routes/contentRoutes');
dotenv.config();

connctDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/content',contentRoutes);

const PORT = process.env.PORT|| 8080;
const DEV_MODE = process.env.DEV_MODE;
app.listen(PORT,()=>{
    console.log(`Server is running in ${DEV_MODE} on ${PORT} port`);
})