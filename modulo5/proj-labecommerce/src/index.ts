import app from "./app";
import { v4 as uuidv4 } from "uuid";
import connection from "./database/connection";
import { Request, Response } from "express"
import { User } from "./types";

// Cadastrar Usuário

app.post("/create-user", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name  = req.body.name
        const email = req.body.email
        const password = req.body.password

        if (!name || !email || !password) {
            throw new Error("Preencha todos os campos!")
        }

        const newUser : User = {
            id : uuidv4(),
            name,
            email,
            password
        }

        await connection.raw(`
            INSERT INTO labecommerce_users(id, name, email, password)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
        `)

        res.status(200).send("Usuário criado!")
    }

    catch (err : any) {
        res.status(errorCode).send(err.message)
    }
})