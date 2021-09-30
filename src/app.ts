import * as express from "express";
import {Application,Request,Response,NextFunction} from "express";

const app:express.Application = express();

app.set("port",process.env.PORT||8080);

app.get("/",(req:Request, res:Response, next:NextFunction) =>{
    res.send("<h1>Hello world</h1>")
});

app.listen(app.get("port"),()=>{
    console.log("server is open");
})


