import mongoose from 'mongoose'
import User from './UserModel.js'
const Coach = User.discriminator(
  'Coach',
  new mongoose.Schema({
    speciality: {
      type: String,
    },
    trainees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
      },
    ],
  })
)
// const coachSchema = mongoose.Schema(
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
//     speciality: {
//       type: String,
//     },
//     phone: { type: Number, required: false },
//     gendre: { type: String, required: false },
//     birthday: { type: Date, required: false },
//     type: {
//       type: String,
//       required: true,
//       default: 'Coach',
//     },
//     trainees: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Client',
//         required: true,
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// )

// mongoose.models = {}
// const Coach = mongoose.model('Coach', coachSchema)

export default Coach
