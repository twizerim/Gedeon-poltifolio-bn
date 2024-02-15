import express from "express"
import Usercontroller from "../controller/usercontroller"


const router =express.Router()
router.post("/regist",Usercontroller.createuser)

export default router