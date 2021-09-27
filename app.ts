import express from "express";

const app:express.Application = express();

const PORT:string | number = process.env.PORT || 8080;
app.set("port",PORT);

app.get("/",((req:express.Request, res:express.Response, next:express.NextFunction) => {
    try{
        res.send("<h1>Hello TypeScript Express</h1>");
    }catch (err){
        next(err);
    }
}));

app.listen(app.get("port"),()=>{
    console.log("server is open")
});
