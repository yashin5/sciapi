import express, { NextFunction } from 'express'
import { Request, Response} from 'express'
import Scientist from '../db/schemas/scientist'


let Router = express.Router()


Router.get("/", (req: Request, res: Response) => {

    Scientist.find(function (err: any, scientist: Document) {
        res.send(scientist)
    })
})

Router.post("/", (req: Request, res:Response) => {

    const scientist = new Scientist(req.body);

    scientist.save((err: any, sci: Document) => {
        if (err) {
            res.status(400)
            res.send(err)
        }else{
            res.status(201)
            res.send(sci)
        }
    })
})

export default Router
