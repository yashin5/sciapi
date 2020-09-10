import express from 'express'
import { Request, Response } from 'express'
import person from './routes/scientist'


var app = express();
const port = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.get('/',function(req: Request,res: Response){
    res.send("Site de Tecnologia");
});

app.use("/scientist", person)

app.listen(port,function(){
    console.log(`Running on http://${HOST}:${port}`);
});