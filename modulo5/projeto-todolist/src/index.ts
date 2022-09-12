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
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}","${newUser.email}");
        `)

        res.status(200).send("Usuário criado com sucesso!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 2 Endpoint -- pegar usuário pelo id
app.get("/user/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const user = await connection.raw(`
            SELECT id, nickname FROM TodoUserList
            WHERE id = "${id}";
        `)

        if (user[0].length === 0) {
            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send(user[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 3 Endpoint -- Editar Usuário
app.put("/user/edit/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        if (!name || !nickname) {
            throw new Error("Preencha todos os campos necessários!")
        }

        await connection.raw(`
            UPDATE TodoUserList
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = "${id}";
        `)

        res.status(200).send("alterado")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 04 Endpoint -- Criar Tarefa
app.post("/task", async (req, res) => {
    let errorCode = 400
    try {
        const title = req.body.title
        const description = req.body.description
        const limitDate = req.body.limit_date
        const creatorUserId = req.body.creator_user_id

        // Variável para colocar data em formato DD/MM/YYYY 
        const vefDate = `${limitDate.slice(6)}/${limitDate.slice(3,5)}/${limitDate.slice(0,2)}`

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Preencha todos os campos necessários!")
        }

        const newTodo = {
            id : uuidv4(),
            title,
            description,
            vefDate,
            creatorUserId
        }
        
        await connection.raw(`
            INSERT INTO TodoTaskList(id, title, description, limit_date, creator_user_id)
            VALUES("${newTodo.id}", "${newTodo.title}", "${newTodo.description}", "${vefDate}", "${newTodo.creatorUserId}");
        `)

        res.status(200).send("Tarefa criada!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 05 Endpoint -- Pegar Task por Id
app.get("/task/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        
        const task = await connection.raw(`
            SELECT TodoTaskList.*, DATE_FORMAT(limit_date,'%d/%m/%Y') as limit_date, TodoUserList.nickname
            FROM TodoUserList, TodoTaskList 
            WHERE TodoUserList.id = TodoTaskList.creator_user_id AND TodoTaskList.id = "${id}";
        `)

        if (task[0].length === 0) {
            throw new Error ("A tarefa não foi encontrada!")
        }

        res.status(200).send(task[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})