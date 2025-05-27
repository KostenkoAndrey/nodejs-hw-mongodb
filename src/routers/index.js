import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';
import dillRouter from './dill.js';

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);
router.use('/dill', dillRouter);

export default router;
