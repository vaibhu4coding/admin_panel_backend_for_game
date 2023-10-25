const app = require('./app')
const dotenv = require('dotenv')
const connectDb = require('./db-connection/db')
const bodyParser = require('body-parser')
dotenv.config({ path: './config/config.env' })
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: true }));

connectDb()
app.listen(port, () => {
    console.log(`App is listnening on port: ${port}`)
})
