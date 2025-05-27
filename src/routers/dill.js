import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { dillController } from "../controllers/dill.js";
import { isValidEthAddress } from "../middlewares/isValidId.js";

const router = Router();

router.get('/:wallet', isValidEthAddress, ctrlWrapper(dillController));

export default router;