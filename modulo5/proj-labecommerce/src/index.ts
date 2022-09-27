import app from "./app";
import { v4 as uuidv4 } from "uuid";
import connection from "./database/connection";
import { Request, Response } from "express"
import { User, Product, Purchase } from "./types";

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

// 04 buscar por todos os produtos

app.get("/products", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const order = req.query.order
        const search = req.query.search

        if (search) {
            const productList = await connection.raw(`
                SELECT * FROM labecommerce_products
                WHERE name LIKE "%${search}%";
            `)

            res.status(200).send(productList[0])
        }

        else if (order) {
            if (order === "ASC" || order === "DESC") {
                const productList = await connection.raw(`
                    SELECT * FROM labecommerce_products
                    ORDER BY name ${order};
                 `)

                res.status(200).send(productList[0])
            }

            else {
                throw new Error("Digite ASC para ordem ascendente ou DESC para ordem descendente") 
            }
        }

        else {
            const productList = await connection.raw(`
                SELECT * FROM labecommerce_products;
            `)

            res.status(200).send(productList[0])
        }    
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 05 registro de compras

app.post("/purchases", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const quantity = req.body.quantity
        
        if (!user_id || !product_id || !quantity) {
            throw new Error("Preencha todos os campos!")
        }

        const getPrice = await connection.raw(`
            SELECT price FROM labecommerce_products
            WHERE id = "${product_id}";
        `)

        const total_price = getPrice[0][0].price * quantity

        const newPurchase: Purchase = {
            id: uuidv4(),
            user_id,
            product_id,
            quantity,
            total_price
        }

        await connection.raw(`
            INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
            VALUES("${newPurchase.id}", "${newPurchase.user_id}", "${newPurchase.product_id}", ${quantity}, ${total_price});
        `)

        res.status(200).send("Compra realizada!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// 06 Busca das compras de um usuário
app.get("/users/:user_id/purchases", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id
        
        const userPurchases = await connection.raw(`
            SELECT name, email, product_id, quantity, total_price from labecommerce_users
            JOIN labecommerce_purchases ON labecommerce_purchases.user_id = labecommerce_users.id
            WHERE labecommerce_users.id = "${user_id}";
        `)

        if (userPurchases[0].length === 0) {
            throw new Error("Não foi possível encontrar compras neste usuário!")
        }

        res.status(200).send(userPurchases[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})
