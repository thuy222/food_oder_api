import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import {AdminRoute, VendorRoute} from "./routes"
import { MONGO_URI } from "./config"

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/admin", AdminRoute)
app.use("/vendor", VendorRoute)



app.listen(8000, () => {
    console.log(`app is running at port ${8000}`)
})