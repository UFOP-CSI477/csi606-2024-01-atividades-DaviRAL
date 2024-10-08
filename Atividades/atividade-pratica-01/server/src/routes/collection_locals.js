import {Router} from "express";
import {GetAllLocalsController} from "../controller/collection_locals/getAllLocals.js";
import {GetLocalsByIdController} from "../controller/collection_locals/getByIdLocals.js";
import {InsertLocalController} from "../controller/collection_locals/insertLocals.js";
import {UpdateLocalController} from "../controller/collection_locals/updateLocal.js";
import {DeleteLocalController} from "../controller/collection_locals/deleteLocal.js";

const collectionLocalsRouter = Router()

const getAllLocals = new GetAllLocalsController()
const getLocalsById = new GetLocalsByIdController()
const insertLocal = new InsertLocalController()
const updateLocal = new UpdateLocalController()
const deleteLocal = new DeleteLocalController()

collectionLocalsRouter.get("/locals", getAllLocals.handle)
collectionLocalsRouter.get("/locals/:id", getLocalsById.handle)
collectionLocalsRouter.post("/locals", insertLocal.handle)
collectionLocalsRouter.put("/locals", updateLocal.handle)
collectionLocalsRouter.delete("/locals/:id", deleteLocal.handle)

export {collectionLocalsRouter}