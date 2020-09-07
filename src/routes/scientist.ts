import express, { NextFunction } from 'express'
import { Request, Response} from 'express'
let Router = express.Router()


Router.get("/", (req: Request, res: Response) => {
    res.send({"message": "elcome to Scientists Endpoints"})
})

Router.get("/:name", (req: Request, res: Response) => {
    res.send({"message": `you requested ${req.params.name}`})
})

Router.post("/", (req: Request, res:Response) => {
    res.status(201).json({"message": "Congrats you created a Scientist"}).send()
})

Router.put("/:id", (req: Request, res: Response) => {
    res.status(122).json({"message": `You tried to update scientist ith id: ${req.params.id}`})
})

Router.delete("/:id", (req: Request, res: Response) => {
    res.status(202).json({"message": `You deleted Scientist Id ${req.params.id}`})
})

export default Router