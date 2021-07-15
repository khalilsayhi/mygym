import { useField } from 'formik'
import React from 'react'

const Input = (props) => {
  const [field, meta] = useField(props.name)
  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className='alert alert-danger' role='alert'>
          {meta.error}
        </div>
      ) : null}
    </>
  )
}

export default Input
