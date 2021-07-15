import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../shared/Input'
import axios from 'axios'
import { toast } from 'react-toastify'
const LoginScreen = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
  })
  const signIn = (values) => {
    axios
      .post('api/users/login', values)
      .then(
        toast.success(
          `an email has been sent to ${values.email}, please check your mail to continue to login`
        )
      )
  }
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        signIn(values)
        setSubmitting(false)
      }}
    >
      {({
        handleSubmit,
        dirty,
        isValid,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='py-5'>
          <h3>Sign In</h3>
          <div className='form-group'>
            <label>Email address</label>
            <Input
              name='email'
              type='email'
              className='form-control'
              placeholder='Enter email'
            />
          </div>
          <button
            disabled={!isValid || !dirty || isSubmitting}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default LoginScreen
