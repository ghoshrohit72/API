import  express from "express";
import bodyParser from 'body-parser'; //this allows us to take incoming post request
import usersRoutes from "./routes/users.js"
const app = express();
const PORT = 5000;

app.use(bodyParser.json())
app.use('/users', usersRoutes)
app.get('/', (req,res) => res.send('HELLO FROM EARTH'))

app.listen(PORT, ()=>{
    console.log(`Server is running on : http://localhost:${PORT }`);
})
