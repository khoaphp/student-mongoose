var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var mongoose = require('mongoose');
mongoose.set('strictQuery', true);

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

var dbString = "mongodb+srv://:@cluster0.qah5q.mongodb.net/Mean0803_02?retryWrites=true&w=majority";

mongoose.connect(dbString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(connection){
    console.log("Mongobd connect sucessfully.");
    require("./routes/main")(app);
})
.catch(function(error){
    console.log("Mongobd connect failed.")
})