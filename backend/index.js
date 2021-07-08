const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const cors  = require('cors') //пакет чтобы отправлять запросы из браузера
const fileupload  = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5001

const app = express()

app.use(cors())
app.use(express.json()) //чтобы приложение могло парсить JSON
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileupload({}))
app.use('/api', router)
app.use(errorHandler) //обработка ошибок(последний миделваре)

app.get('/', (reg, res)=>{
    res.status(200).json({massage: 'Work !!!!!!!!!'})
})

const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>console.log(`server has been started on port ${PORT}`))
    }catch (e) {
        console.log(e)

    }
}

start()
