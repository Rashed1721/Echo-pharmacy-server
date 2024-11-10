import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('', UserControllers.getAllUsers);
router.get('/:email', UserControllers.getSingleUser);
router.put('', UserControllers.updateUserRole);

export const UserRoutes = router;
