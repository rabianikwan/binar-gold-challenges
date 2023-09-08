import { Router } from "express";
import path from "path";
const router = Router();

router.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, "..", "/views", "index.html"))
})

router.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/views", "add-menu.html"))
})

router.get('/update', (_, res) => {
    res.sendFile(path.join(__dirname, "..", "/views", "update.html"))
})

router.get('/delete', (_, res) => {
    res.sendFile(path.join(__dirname, "..", "/views", "delete.html"))
})

router.use((_, res) => {
    res.sendFile(path.join(__dirname, "..", "/views", "404.html"))
})


export default router;