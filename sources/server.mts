import type {Express, Request, Response} from "express"
import express from "express"

import {indexRouter} from "./routes/index.mjs"

export const server: Express = express()

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use("/", indexRouter)

// Catch 404 and forward to error handler
server.use((req: Request, res: Response) => {
    res.status(404)
})
