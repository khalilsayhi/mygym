import asyncHandler from 'express-async-handler'
import Client from '../models/ClientModel.js'
import Coach from '../models/CoachModel.js'
import User from '../models/UserModel.js'
import nodemailer from 'nodemailer'
import { generateLoginToken } from '../utils/generateToken.js'
import generateToken from '../utils/generateToken.js'
import jwt from 'jsonwebtoken'
//@desc authenticate user and send login mail
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email: email })

  if (user) {
    sendEmail(email, user._id)

    res.status(200).json({ message: 'success' })
  } else {
    res.status(404).json({ error: 'please verify your email address' })
  }
})

//@desc get user Info after following login link
// @route POST /api/users/token
// @access public
const verifyLogin = asyncHandler(async (req, res) => {
  const { token } = req.body
  let decoded
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_Verifying)
  } catch (err) {
    res.status(404)
    throw new Error('Invalid token')
  }

  const user = await User.findById(decoded.id)
  if (user) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
      type: user.__type,
      birthday: user.birthday || null,
      gender: user.gender || null,
      phone: user.phone || null,
    })
  } else {
    res.status(404)
    throw new Error('Invalid email or password')
  }
})

const sendEmail = (email, id) => {
  const token = generateLoginToken(id, email)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khalil.sayhi01@gmail.com',
      pass: 'khalilkhalil',
    },
  })
  const mailOptions = {
    from: 'khalil.sayhi01@gmail.com',
    to: email,
    subject: 'login link',
    text: `Follow this link to update your password : http://localhost:3000/verifylogin?token=${token} `,
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

//@desc create user
// @route POST /api/users/add
// @access public
const addUser = asyncHandler(async (req, res) => {
  const user = await Client.create({
    firstName: 'test',
    lastName: 'test',
    email: 'khalil.sayhi1@esprit.tn',
  })
  if (user) {
    res.status(201).json('ok')
  }
})

export { authUser, addUser, verifyLogin }
