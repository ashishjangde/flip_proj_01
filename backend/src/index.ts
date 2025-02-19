import app from "./app";
import connectDb from "./db/dbConfig";
import 'dotenv/config'  // same as import dotenv form 'dotenv'   dotenv.config();


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

connectDb()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
.catch(()=>{
    console.log("error while connecting to the server")
    process.exit(1)
})