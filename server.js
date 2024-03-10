const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv=require('dotenv').config();
const app=express();
connectDb();
app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes.js'));
app.use(errorHandler);
const port=process.env.PORT||5000;
app.listen(port,(req,res)=>{

})
