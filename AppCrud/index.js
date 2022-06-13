const express = require("express"),
    app = express(),
    morgan = require('morgan'),
    bodyParser = require('body-parser');
    cors = require('cors');
    dotenv = require('dotenv');

    const port =  3002;

    
    //seguridad
    var corsOptions = {
        origin: '',
        optionsSuccessStatus: 200 // For legacy browser support
    }
    
    app.use(cors(corsOptions));
    
    
    // Headers Peticiones que se pueden aceptar 
    app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      // Pass to next layer of middleware
      next();
  });
  

    
    
    //  limita el req http a 50 mb
    app.use(bodyParser.urlencoded(
        {
          limit: '50mb',
          extended: true
        }
      ));
      app.use(bodyParser.json(
        {
          limit: '50mb'
        }
      ));

   


    // mantener en public el estado de Express
    app.use(express.static("public"));

    // Inicializacion de API
    var router = require('./api');
    app.use('/api', router);
    
    app.listen(port, (err) => {
        if(err){
          console.log('Error: '+err)
        }
        else{
          console.log(`PORT: ${port}`);
        }
        
    });

