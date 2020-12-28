import express, { Request, Response } from 'express';
import scientistsRouter from './routes/scientist';
const morgan = require('morgan');

var app = express();

// Config
var port = process.env.PORT || 3000;
const HOST = '0.0.0.0';
if (!module.parent) { app.listen(port)};

// Defining Middleware
app.use(express.json());
app.use(morgan('short'));

//Adding Scientist Router to application
app.use("/scientist", scientistsRouter);

// This was added as a main route for the project, I just changed the response
app.get('/', (req: Request, res: Response) => {
    const information = {
        project: "SciAPI",
        message: "Welcome to the Scientist API"
    };
    res.send(information);
});


// Put app to listen on HOST:port
app.listen(port, () => {
    console.log(`Running on http://${HOST}:${port}`);
});

export default app;