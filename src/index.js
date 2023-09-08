import express from 'express';
import dotenv from 'dotenv';
import dishesRoutes from "./router/dishes.routes";
import frontendRoutes from "./router/view.routes"
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({origin: "*"}))
app.use(express.static("./src/public"))
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// api
app.use(dishesRoutes)

// frontend
app.use(frontendRoutes)

app.listen(port, () => console.log('server has run http://localhost:' + port))