import {Router} from "express";

import { GetAllBlood_TypeController } from "../controller/blood_type/getAllBlood_Type.js";
import { GetTypeByIdController } from "../controller/blood_type/getById_Type.js";
import { InsertTypeController} from "../controller/blood_type/insertBlood_Type.js";
import { DeleteTypeController } from "../controller/blood_type/delete_Type.js";
import { UpdateTypeController} from "../controller/blood_type/update_Type.js";

const bloodTypeRouter = Router()

const getAllBloodTypes = new GetAllBlood_TypeController()
const getTypeById = new GetTypeByIdController()
const insertBloodType = new InsertTypeController()
const deleteBloodType = new DeleteTypeController()
const updateBloodType = new UpdateTypeController()

bloodTypeRouter.get("/bloodtype", getAllBloodTypes.handle)
bloodTypeRouter.get("/bloodtype/:id", getTypeById.handle)
bloodTypeRouter.post("/bloodtype", insertBloodType.handle)
bloodTypeRouter.delete("/bloodtype/:id", deleteBloodType.handle)
bloodTypeRouter.put("/bloodtype/:id", updateBloodType.handle)

export {bloodTypeRouter}

