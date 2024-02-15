import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./routers"

dotenv.config()
const andela = express()
andela.use(bodyParser.json())
andela.use("/Jant",router)


const portas = process.env.PORT
const db = process.env.DATABASE

andela.listen(portas,() => {
    console.log(`Server running on port ${portas}`)
})

mongoose.connect(db).then(() => {
    console.log("Database successfully connected.....")
}).catch((error) => {
    console.log(`${error}`)
})

export default andela
