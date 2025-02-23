import mongoose from "mongoose";



export default async function connectDb() {
    try {
       const db = await mongoose.connect(`${process.env.MONGO_DATABASE_URL}`) 
       console.log('database connection successfull')
        console.log(db.connection.host)
    } catch (error) {
        console.log("error while connecting to the server " , error)
        process.exit(1)
    }
}