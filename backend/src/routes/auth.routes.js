const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);

router.post('/partner/register', authController.registerFoodPartner);
router.post('/partner/login', authController.loginFoodPartner);
router.post('/partner/logout', authController.logoutFoodPartner);

module.exports = router;