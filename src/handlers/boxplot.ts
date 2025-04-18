import {Request, Response, NextFunction} from 'express'
import BoxplotController from "../controllers/boxplot";
import { bpService } from "../db/boxplot";

const boxplotController = new BoxplotController(bpService);

class BoxplotHandler {
    async getBoxplot(req:Request, res:Response, next:NextFunction): Promise<void>{
        try{
            const boxplot= await boxplotController.getBoxplot();
            res.status(200).json(boxplot);
        } catch(error){
            res.status(500).json({message:"No se pudo completar"});
        }
    }
}

export default new BoxplotHandler();