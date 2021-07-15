import mongoose from 'mongoose'

const baseOptions = {
  discriminatorKey: '__type',
  collection: 'user',
  timestamps: true,
  collection: 'users',
}
const User = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      isSubscribed: {
        type: Boolean,
        default: false,
      },
      phone: { type: Number, required: false },
      gendre: { type: String, required: false },
      birthday: { type: Date, required: false },
    },
    baseOptions
  )
)

// mongoose.models = {}
// const User = mongoose.model('User', userSchema)

export default User
