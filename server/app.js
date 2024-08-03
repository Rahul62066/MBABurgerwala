import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import {connectPassport} from './utils/Provider.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
const app = express();
export default app;

dotenv.config({
    path:"./config/config.env",
});

//using middleware

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
}));

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
    extended:true,
}))
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

//import Routes 

import userRoute from './routes/user.js'
import orderRoute from './routes/order.js'
import passport from 'passport';

app.use("/api/v1",userRoute);
app.use("/api/v1",orderRoute);


//Error Middleware
app.use(errorMiddleware)