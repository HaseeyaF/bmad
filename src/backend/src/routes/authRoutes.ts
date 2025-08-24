import express from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser, updateProfile } from '../controllers/authController';
import { auth } from '../middleware/auth';

const router = express.Router();

// Registration validation middleware
const validateRegistration = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
];

// Login validation middleware
const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Registration route
router.post('/register', validateRegistration, registerUser);

// Login route
router.post('/login', validateLogin, loginUser);

// Profile update validation middleware
const validateProfileUpdate = [
  body('email').optional().isEmail().withMessage('Please enter a valid email'),
  body('password')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
  body('lastName').optional().notEmpty().withMessage('Last name cannot be empty'),
  body('phone').optional().trim().notEmpty().withMessage('Phone number cannot be empty'),
];

// Update profile route
router.put('/profile', auth, validateProfileUpdate, updateProfile);

export default router;
