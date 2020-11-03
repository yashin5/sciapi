import { RSA_NO_PADDING } from "constants";
import { Request, Response } from "express";
import { Model } from "mongoose";
import Scientist from '../db/schemas/scientist'


export class ScientistController {

    public getScientists(req: Request, res: Response) {

        const scientistId = req.params.scientistId;

        if (scientistId){
            Scientist.findOne({_id: scientistId}, function(err: any, scientist: Document){
                if (err) {
                    res.status(404)
                    return res.send("No Scientist with given id was found");
                }
                res.send(scientist);
            })
        }else{
            Scientist.find({}, function(err: any, scientist: Document){
                if (err) {
                    res.send(err);
                }
                res.send(scientist);
            })
        }
    }

    public createScientist(req: Request, res: Response) {
        const scientist = new Scientist(req.body);

        scientist.save((err: any, sci: Document) => {
            if (err) {
                res.status(400);
                res.send(err);
            }else{
                res.status(201);
                res.send(sci);
            }
        })
    }

    public deleteScientist(req: Request, res: Response) {
        const scientistId = req.params.scientistId;

        Scientist.deleteOne({_id: scientistId}, (err: any) => {
            if(err){
                res.status(400);
                res.send({'error': "There is no scientist with this ID"});
            }
            else{
                res.status(204);
            }
        })
    }

    public updateScientist(req: Request, res: Response) {
        const scientistId = req.params.scientistId;

        const updatedScientist = new Scientist(req.body);
        console.log("Preparando para atualizar");
        Scientist.findOneAndUpdate(
            {_id: scientistId},
            req.body,
            {sendOriginal: false},
            (err: any, scientist: Document) => {
                if (err) {
                    res.status(404)
                    res.send("Scientist not Found")
                }else{
                    res.send("The Scientist was sucessfully updated")
                }
            })

    }

}