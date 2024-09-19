import {Router} from "express";
import { GetAllStatesController } from "../controller/states/getAllStatesController.js";
import { GetStateByIdController } from "../controller/states/getStateById.js";
import { GetStateByNameController } from "../controller/states/getStateByName.js";
import { InsertStateController } from "../controller/states/insertState.js";
import { UpdateStateController } from "../controller/states/updateState.js";
import { DeleteStateController } from "../controller/states/deleteState.js";

const statesRouter = Router()

const getAllStates = new GetAllStatesController()
const getStateById = new GetStateByIdController()
const getStateByName = new GetStateByNameController()
const insertState = new InsertStateController()
const updateState = new UpdateStateController()
const deleteState = new DeleteStateController()

statesRouter.get("/states", getAllStates.handle)
statesRouter.get("/states/:id", getStateById.handle)
statesRouter.get("/states", getStateByName.handle);
statesRouter.post("/states", insertState.handle)
statesRouter.put("/states/:id", updateState.handle)
statesRouter.delete("/states/:id", deleteState.handle)

export {statesRouter}