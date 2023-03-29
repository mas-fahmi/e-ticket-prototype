const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))