import express from 'express'
import { Request, Response } from 'express'
import scientistsRouter from './routes/scientist'


var app = express();
const port = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Defining Middleware
app.use(express.json())
app.use("/scientist", scientistsRouter)


app.get('/',function(req: Request,res: Response){

    const information = {
        project: "SciAPI",
        message: "Welcome to the Scientist API"
    }

    res.send(information)
});

app.listen(port,function(){
    console.log(`Running on http://${HOST}:${port}`);
});