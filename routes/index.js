import express from 'express';
import { refreshToken } from '../controllers/RefreshToken.js';
import { getUsers, Login, Logout, Register } from '../controllers/Users.js';
import { VerifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get('/users', VerifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
export default router;
