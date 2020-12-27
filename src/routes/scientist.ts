import express, { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import { ScientistController } from '../controller/scientist';
import Scientist from '../db/schemas/scientist';


let Router = express.Router()

let SciController = new ScientistController();

Router.get("/", (req: Request, res: Response) => {
    SciController.getScientists(req, res);
})


Router.get("/:scientistId", (req: Request, res: Response) => {
    SciController.getScientists(req, res);
})

Router.post("/", (req: Request, res: Response) => {
    SciController.createScientist(req, res);

})

Router.delete("/:scientistId", (req: Request, res: Response) => {
    SciController.deleteScientist(req, res)
})


Router.put("/:scientistId", (req: Request, res: Response) => {
    SciController.updateScientist(req, res)
})

export default Router
