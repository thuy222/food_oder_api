import express from "express"
import {AdminRoute, VendorRoute} from "./routes"

const app = express()

app.use("/admin", AdminRoute)
app.use("/vendor", )


app.listen(8000, () => {
    console.log(`app is running at port ${8000}`)
})