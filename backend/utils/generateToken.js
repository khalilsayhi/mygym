import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
export const generateLoginToken = (id, email, type) => {
  console.log(process.env.JWT_SECRET_Verifying)
  return jwt.sign({ id, email, type }, process.env.JWT_SECRET_Verifying, {
    expiresIn: '30d',
  })
}

export default generateToken
