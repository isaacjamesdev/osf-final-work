const bodyParser = require('body-parser');
const express = require('express')
const app = express();

app.controlContact = require('../app/controllers/contact')
app.controlView = require('../app/controllers/view')
app.controlUtils = require('../app/controllers/utils')

app.set("views", __dirname+"\\..\\app\\views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use( express.static( "app" ) );

require('../app/routes/routes')(app)
module.exports = app;