const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const authRoute = require('./routes/auth/auth.route');
const weightRoute = require('./routes/weight/weight.route');
const trainingRoute = require('./routes/training/training.route');

require('dotenv').config({path: __dirname + '/.env'})
const PORT = process.env.PORT || 3000
let PASS = process.env.MONGO_DB_PASS

if (!!!PASS) {
    const config = require('./mongo_db_pass')
    PASS = config.password
}
const MONGODB_URI = `mongodb+srv://user1:${PASS}@cluster0-nmc55.mongodb.net/gymer`

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))


app.use('/api', authRoute)
app.use('/api/weight', weightRoute)
app.use('/api/training', trainingRoute)

app.use(express.static(__dirname + '/public/'))
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))



async function start() {
    try {

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log('MongoDB connected')

        app.listen(PORT, function () {
            console.log(`App listening on port ${PORT}`);
        });
    }
    catch (e) {
        console.log(e)
    }

}

start()