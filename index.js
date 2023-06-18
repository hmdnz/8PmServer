const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

const studentsRouter = require('./routes/Students')
app.use('/students', studentsRouter)

db.sequelize.sync().then(()=>{
    app.listen(2023, ()=>{
        console.log('server runing')
    })
})