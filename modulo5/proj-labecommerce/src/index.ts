import app from "./app";
import { v4 as uuidv4 } from "uuid";
import connection from "./database/connection";
import { Request, Response } from "express"
import { User, Product } from "./types";

// 01 Cadastrar Usuário

app.post("/create-users", async (req: Request, res: Response) => {
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

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 02 Buscar Usuários


app.get("/users", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userList = await connection.raw(`
        SELECT * FROM labecommerce_users
        ORDER BY name ASC;
        `)

        res.status(200).send(userList)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// 03 Cadastro de Produto
app.post("/create-product", async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const name = req.body.name
        const price = Number(req.body.price)
        const image_url = req.body.image_url

        if(!name || !price || !image_url){
            throw new Error("Preencha todos os campos")
        }

        const newProduct: Product = {
            id : uuidv4(),
            name,
            price,
            image_url
        }

        await connection.raw(`
            INSERT INTO labecommerce_products(id, name, price, image_url)
            VALUES("${newProduct.id}","${newProduct.name}", ${newProduct.price}, "${newProduct.image_url}")
        `)

        res.status(200).send("Produto adicionado com sucesso!")

    }
    catch( error : any){
        res.status(errorCode).send(error.message)
    }
})