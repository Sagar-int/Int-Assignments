import express, { json, urlencoded } from "express";
// const logger = require('morgan');
import bodyParser from "body-parser";
import cors from "cors";
import subRouter  from "./routes/subject.routes.js";
import skillRouter  from "./routes/skill.routes.js";
import authRouter  from "./routes/auth.routes.js";
import helmet from "helmet";
import createHttpError from "http-errors";

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger('dev'));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());


// Endpoints 
app.use('/api/subject', subRouter);
app.use('/api/skill', skillRouter);
app.use('/api/auth', authRouter);




app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(function(req, res, next) {
    // console.log( req, res, next )
    if (!req.user) return next(createHttpError(401, 'Please login to view this page.'))
    next()
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    //res.locals.message = err.message;
    //res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
  
    console.log('err',err);
  
    res.json({
      message:err.message,
      error: req.app.get('env') === 'development' ? err : {}
    })
  });




// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


export default app;