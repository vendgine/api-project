import type {Request, Response} from "express"
import {Router} from "express"

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
    res.json({
        title: "Express",
    })
})
