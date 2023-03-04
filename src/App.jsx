import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, useFormik } from 'formik';
import * as yup from "yup";
import './App.css'

const formValidationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password : yup.string().required(),
});

export function Form() {
    

    const formik = useFormik({
    initialValues: {
      username: "",
      email : "",
      password : ""
    },
    validationSchema : formValidationSchema,
    onSubmit : (values) => console.log(values)
  });
  
  return (
       <form onSubmit={formik.handleSubmit}>
       <TextField 
       name="username"
       onChange={formik.handleChange}
       value={formik.values.username}
       label="Username" variant="filled" />
       <TextField 
       name="email"
       onChange={formik.handleChange}
       value={formik.values.email}
       label="E-mail" variant="filled" />
       <TextField 
       name="password"
       onChange={formik.handleChange}
       value={formik.values.password}
       label="Password" variant="filled" />
       <Button type='submit' variant="contained">Submit</Button>
       </form>
  )
}

