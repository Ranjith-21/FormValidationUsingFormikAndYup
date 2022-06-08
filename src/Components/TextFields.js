import React from 'react'
import { ErrorMessage, useField } from 'formik'
import './TextFields.css'

 export const TextField = ({label,...props}) => {
    const [field, meta] = useField(props)
    // console.log('field',field);
    // console.log('props',props);
  return (
    <div className='mb-2 mainDiv'>
            <label className='label' htmlFor={field.name}>{label}</label>
            <input 
            className={`form-control input shadow-none ${meta.touched && meta.error && 'is-invalid' } `}
            autoComplete='off'
            {...field} {...props}
            />
            <ErrorMessage component='div' name={field.name} className='error' />
    </div>
  )
}