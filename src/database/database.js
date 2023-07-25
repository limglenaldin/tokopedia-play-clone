import 'dotenv/config'
import mongoose from 'mongoose'

const connectDatabase = (connectionString, databaseName) =>  {

    mongoose.connect(connectionString+databaseName)
        .then(() => console.log(`Success open connection to ${databaseName} Database`))
        .catch((err) => console.error(`Oops, failed to open connection to ${databaseName} Database`, err))
}

export default connectDatabase