import React from 'react'
import {Formik,Form} from 'formik'
import { TextField } from './TextFields'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
     const validate=Yup.object({
        firstName:Yup.string().max(15,'Must be 15 characters or less').required('Required'),
        password:Yup.string().min(6,'Password must be atleast 6 characters').required('Password is Required'),
    })

let getData=JSON.parse(localStorage.getItem("data"))
    let navigate=useNavigate()
    // console.log(getData);

    let login=(value)=>
    {
        // console.log(value);
       let role=getData.map((val)=>
        {
            if(val.username===value.firstName && val.Password===value.password)
            {
                return val.role
            }else {return null}
        })
        // console.log(role);
        let roleStatus=role.filter((val)=>val!==null)
        // console.log(roleStatus);
    if(roleStatus[0]==='Admin')
    {
        navigate('/Batch')
        console.log('user is Admin');
    }
    else if(roleStatus[0]==='Employee')
    {
        navigate('/Employee')
        console.log('user is Employee');
    }else{console.log('entered Wrong credentials');}
    }
  return (
    <Formik
    initialValues={{
        firstName:'',
        password:''
    }}
    validationSchema={validate}
    onSubmit={(value)=>{login(value)}}
    >
        {formik=>( 
            <Form>
               <TextField label='First Name' name="firstName" type='text' />
               <TextField label='PassWord' name="password" type='password' />
               <button className='btn btn-primary mt-3' type='submit' >Login</button>
            </Form>
        )}
    </Formik>
  )
}
