const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require('./routers/books');
mongoose.Promise = global.Promise;
const bodyParser = require("body-parser");
const core = require('cors');


const url = "mongodb://localhost/books"

const app = express();

//mongodb connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); //to avoid the warnings

const dbCon = mongoose.connection;

dbCon.on("open", () => {

    console.log("connected....");

});
//MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(core('origin','localhost:4200'));

// call all books route
app.use('/books',bookRouter);



app.listen(7000,() =>{
    console.log('Running')
});