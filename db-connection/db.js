const mongoose = require('mongoose')
const connectDb = () => {
    mongoose.connect(process.env.URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("Mongodb connected...")
        })
}
module.exports = connectDb