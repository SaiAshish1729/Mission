import express from 'express'
import { createMission, getMission } from '../Controller/mission.js';
const router = express.Router();

router.post("/create-mission", createMission);
router.get("/get-mission", getMission);


export default router;