const express    = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const app = express();

 mongoose.connect(config.database, err=> {
    if(err)    {
        console.log(err);
    }    else    {
        console.log('successfully connected');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extender: false}));
app.use(morgan('dev'));
app.use(cors());

// const corsOpt = {
//     origin: process.env.CORS_ALLOW_ORIGIN || '*', 
//     methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'] 
// };
// app.use(cors(corsOpt)); 
// app.options('*', cors(corsOpt))


// app.use(cors({
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/account');
const sellerRoutes = require('./routes/seller');
const productSearchRoutes = require('./routes/product-search');

app.use('/api', mainRoutes);
app.use('/api/accounts', userRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/search', productSearchRoutes);

app.listen(3030,  function()  {
  console.log('Example app listening on port 3030!');
});



