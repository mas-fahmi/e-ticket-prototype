const express = require('express');
const cors = require('cors');
const auth = require('./config/conAuth.js')
const bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express()
const port = 3001

try {
    auth.authenticate();
    console.log('Auth Connected!!');
} catch (error) {
    console.log(error);
}

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))