import {Router} from "express";
import { GetAllPersonsController } from "../controller/persons/getAllPersons.js";
import {GetPersonByIdController} from "../controller/persons/getByIdPerson.js";
import { InsertPersonController} from "../controller/persons/insertPerson.js";	
import {UpdatePersonController} from "../controller/persons/updatePerson.js";
import {DeletePersonController} from "../controller/persons/deletePersons.js";

const personsRouter = Router()

const getAllPersons = new GetAllPersonsController()
const getPersonById = new GetPersonByIdController()
const insertPerson = new InsertPersonController()
const updatePerson = new UpdatePersonController()
const deletePerson = new DeletePersonController()

personsRouter.get("/persons", getAllPersons.handle)
personsRouter.get("/persons/:id", getPersonById.handle)
personsRouter.post("/persons", insertPerson.handle)
personsRouter.put("/persons", updatePerson.handle)
personsRouter.delete("/persons/:id", deletePerson.handle)

export {personsRouter}