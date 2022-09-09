import express, { Request, Response } from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';

const app = express()

app.use(express.json())
app.use(cors())



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})