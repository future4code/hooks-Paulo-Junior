import app from "./app";
import { v4 as uuidv4 } from "uuid";
import connection from "./database/connection";

// 1º Endpoint  - Criar Usuário
app.post("/user", async (req, res) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if (!name || !nickname || !email) {
            throw new Error("Preencha todos os campos necessários")
        }

        const newUser = {
            id : uuidv4(), // pode usar id: Number(Date.now()) , se quiser
            name,
            nickname,
            email
        }

        await connection.raw(`
            INSERT INTO TodoUserList(id, name, nickname, email)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}");
        `)

        res.status(200).send("Usuário criado com sucesso!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})