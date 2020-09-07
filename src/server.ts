import express from 'express'
import { Request, Response } from 'express'

var app = express();
const port = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.get('/',function(req: Request,res: Response){
    res.send("Site de Tecnologia");
});

app.listen(port,function(){
    console.log(`Running on http://${HOST}:${port}`);
});