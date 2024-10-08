import {Router} from "express";
import { GetAllDonationController } from "../controller/donations/getAllDonation.js";
import {GetDonationByIdController} from "../controller/donations/getByIdDonation.js";
import {insertDonationController} from "../controller/donations/insertDonation.js";
import {UpdateDonationController} from "../controller/donations/updateDonation.js";
import {DeleteDonationController} from "../controller/donations/deleteDonation.js";

const donationsRouter = Router()

const getAllDonations = new GetAllDonationController()
const getDonationById = new GetDonationByIdController()
const insertDonation = new insertDonationController()
const updateDonation = new UpdateDonationController()
const deleteDonation = new DeleteDonationController()

donationsRouter.get("/donations", getAllDonations.handle)
donationsRouter.get("/donations/:id", getDonationById.handle)
donationsRouter.post("/donations", insertDonation.handle)
donationsRouter.put("/donations", updateDonation.handle)
donationsRouter.delete("/donations/:id", deleteDonation.handle)

export {donationsRouter}