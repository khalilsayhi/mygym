import express from 'express'
import {
  authUser,
  addUser,
  verifyLogin,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/login').post(authUser)
router.route('/add').post(addUser)
router.route('/token').post(verifyLogin)

export default router
