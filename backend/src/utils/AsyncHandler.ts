//HOF function
import type { Request, Response, NextFunction } from "express";

interface FuncType {
    (req: Request, res: Response) : Promise<void> 
}

export default function asyncHandler(func : FuncType){
    return async (req: Request , res : Response , next : NextFunction) =>{
        try {
            func(req , res)
        } catch (error) {
            next(error)
        }
    }
}

