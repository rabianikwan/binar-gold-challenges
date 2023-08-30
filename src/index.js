import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dishesRoutes from "./router/dishes.routes";
import frontendRoutes from "./router/view.routes"

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;
// limit each IP to 10 request/windowMs / 15 min
const protectDdos = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20
});

// security 
app.use(helmet())
app.use(protectDdos)

//
app.use(express.static("./src/public"))
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// api
app.use(dishesRoutes)

// frontend
app.use(frontendRoutes)

app.listen(port, () => console.log('server has run http://localhost:' + port))