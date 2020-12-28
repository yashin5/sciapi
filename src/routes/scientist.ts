import express, { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import { getScientists, createScientist, deleteScientist, updateScientist } from '../controller/scientist';
import Scientist from '../db/schemas/scientist';


let Router = express.Router()

Router.get("/", (req: Request, res: Response) => {
    getScientists(req, res);
})


Router.get("/:scientistId", (req: Request, res: Response) => {
    getScientists(req, res);
})

Router.post("/", (req: Request, res: Response) => {
    createScientist(req, res);

})

Router.delete("/:scientistId", (req: Request, res: Response) => {
    deleteScientist(req, res)
})


Router.put("/:scientistId", (req: Request, res: Response) => {
    updateScientist(req, res)
})

export default Router
