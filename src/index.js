require('dotenv').config()
const express = require('express')
const http = require("http");
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan')

const route = require('./routers')

const app = express();
app.use(cors())

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan(':date[iso] :method :url :status :response-time ms - :res[content-length]'))
 

const server = http.createServer(app);

// route(app);

app.get('/', function (req, res) {
    res.send('hello, world!')
  })
  
server.listen(process.env.PORT, () => {
  console.log('Server is running on port ', process.env.PORT);
});
