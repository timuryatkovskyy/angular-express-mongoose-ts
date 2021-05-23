import express from 'express'
import router from './router'
import cors from 'cors'
const app = express()
const host = 'localhost'
const port = 4201

app.use(express.json())
app.use(cors())
app.use(router)


app.listen(port, host,  () => {
    console.log(`[ App is listening on http://${host}:${port} ]`)  
})

