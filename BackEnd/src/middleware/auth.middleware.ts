import type { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { UserService } from "../services/userService.js";

const userService = new UserService();
dotenv.config()

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    // 1. Mudamos de .send() para .json()
    if (!token) return res.status(403).json({ error: "Nenhum token fornecido." })
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
        req.user = Number(decoded.sub)

        const users = await userService.getById(req.user);
        
        // 2. Proteção: Se o usuário foi deletado, barramos aqui antes de dar erro!
        if (!users) {
            return res.status(401).json({ error: "Usuário não encontrado ou deletado." });
        }

        req.role = users.role
        next()
    } catch (err) {
        // 3. Mudamos o formato da resposta de texto para JSON
        res.status(401).json({ error: "Token inválido" })
    }
}