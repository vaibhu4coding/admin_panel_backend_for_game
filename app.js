const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({ path: '.env' })

const userRoutes = require('./routes/user-routes')
const walletRoutes = require('./routes/wallet-route')
const adminRoutes = require('./routes/admin-routes')
const playerRoutes = require('./routes/player-routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/wallet', walletRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/player',playerRoutes)
app.use('/api/v1/admin', adminRoutes)
module.exports = app