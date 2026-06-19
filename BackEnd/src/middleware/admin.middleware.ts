import type { NextFunction, Request, Response } from "express";

export const adminMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const isAdmin = req.role === "ADMIN";
    console.log(req.role)
    if (isAdmin){
        next()
    }
    else{
        res.status(403).send()
    }
}