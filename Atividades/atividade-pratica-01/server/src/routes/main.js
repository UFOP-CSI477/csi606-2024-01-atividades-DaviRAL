import { Router } from "express";

const mainRouter = Router()

mainRouter.get("/", (request, response) => {

    return response.json({
        message: "Hello, World!"
    })

})

export { mainRouter }