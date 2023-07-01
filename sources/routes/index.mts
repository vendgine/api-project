import type {Request, Response} from "express"
import {Router} from "express"

import {helloController} from "../controllers/hello.mjs"

export const indexRouter: Router = Router()

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
indexRouter.get("/", (req: Request, res: Response) => {
    const helloWorld = helloController()

    res.json({
        content: helloWorld,
    })
})
