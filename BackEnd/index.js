const express = require('express')
const bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))