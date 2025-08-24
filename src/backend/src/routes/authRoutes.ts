import express from 'express';
import { body } from 'express-validator';
import { registerUser } from '../controllers/authController';

const router = express.Router();

// Validation middleware
const validateRegistration = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
];

// Registration route
router.post('/register', validateRegistration, registerUser);

export default router;
