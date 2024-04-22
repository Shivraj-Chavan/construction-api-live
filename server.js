const express=require('express')
const doenv=require('dotenv')
const app=express()
const getConnection=require("./config")
const router = require('./router')

doenv.config()

app.use(express.json())
//get all data from the database

const ui=require("swagger-ui-express")
const doc=require("./swagger-output.json")
app.use("/api-docs",ui.serve,ui.setup(doc))
app.use("/api/v1/",router)

const PORT=process.env.PORT || 4030
getConnection()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})



// srv511996.hstgr.cloud