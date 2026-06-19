import "express"

declare global {
    namespace Express  {
        interface Request {
            user: number 
            role: string

        }
    }
}

export {}