import app from "./app";
import { v4 as uuidv4 } from "uuid";
import connection from "./connection";

// Endpoint 01 - Criar Usuário
app.post("/user", async (req, res) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if (!name || !nickname || !email) {
            throw new Error("Os campos não estão completos!")
        }

        const newUser = {
            id : uuidv4(),
            name,
            nickname,
            email
        }

        await connection.raw(`
            INSERT INTO TodoUserList(id, name, nickname, email)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}");
        `)

        res.status(200).send("Usuário criado!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})