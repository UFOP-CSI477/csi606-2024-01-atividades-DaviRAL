import {Router} from "express";
import { GetAllCitiesController } from "../controller/cities/getAllCitiesController.js";
import { GetCityByIdController } from "../controller/cities/getCityById.js";
import { GetCityByNameController } from "../controller/cities/getCityByName.js";
import { UpdateCityController } from "../controller/cities/updateCity.js";
import { DeleteCityController } from "../controller/cities/deleteCity.js";
import { InsertCityController } from "../controller/cities/insertCity.js";

const citiesRouter = Router()

const getAllCities = new GetAllCitiesController()
const getCityById = new GetCityByIdController()
const getCityByName = new GetCityByNameController()
const updateCity = new UpdateCityController()
const deleteCity = new DeleteCityController()
const insertCity = new InsertCityController()


citiesRouter.get("/cities", getAllCities.handle)
citiesRouter.get("/cities/:id", getCityById.handle)
citiesRouter.get("/cities/nome/:nome", getCityByName.handle);
citiesRouter.put("/cities/:id", updateCity.handle)
citiesRouter.delete("/cities/:id", deleteCity.handle)
citiesRouter.post("/cities", insertCity.handle)

export {citiesRouter}