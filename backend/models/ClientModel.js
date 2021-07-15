import mongoose from 'mongoose'
import User from './UserModel.js'

const Client = User.discriminator(
  'Client',
  new mongoose.Schema({
    isSubscribed: {
      type: Boolean,
      default: false,
    },
    coachList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach',
        required: true,
      },
    ],
  })
)
// const clientSchema = mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     isSubscribed: {
//       type: Boolean,
//       default: false,
//     },
//     phone: { type: Number, required: false },
//     gendre: { type: String, required: false },
//     birthday: { type: Date, required: false },
//     type: {
//       type: String,
//       required: true,
//       default: 'Client',
//     },
//     coachList: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Coach',
//         required: true,
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// )

// mongoose.models = {}
// const Client = mongoose.model('Client', clientSchema)

export default Client
