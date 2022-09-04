const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');

app.use(cors({origin: 'http://localhost:3000'}));


// Body Passer 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Using the Routes Defined in the Routes script 
app.use(routes);


// Connecting to the .ENV file 
mongoose.connect(process.env.DB_CONNECTION, (err) =>{
    if(err){
        console.log("Error Connecting to MongoDB", err);
    } else {
        console.log("Connected to MongoDB");
    }
});


// Connecting to the Server 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {console.log(`Server is running on: ${PORT}`)});