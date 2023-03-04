import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, useFormik } from 'formik';
import * as yup from "yup";
import './App.css'

const formValidationSchema = yup.object({
  username: yup.string().min(8).required(),
  email: yup.string().required(),
  password : yup.string().min(8).required(),
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
       onBlur={formik.handleBlur}
       value={formik.values.username}
       label="Username" variant="filled" />
       {formik.touched.username && formik.errors.username ? formik.errors.username : null} 
       <TextField 
       name="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.email}
       label="E-mail" variant="filled" />
       {formik.touched.email && formik.errors.email ? formik.errors.email : null} 
       <TextField 
       name="password"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.password}
       label="Password" variant="filled" />
       {formik.touched.password && formik.errors.password ? formik.errors.password : null} 
       <Button type='submit' variant="contained">Submit</Button>
       </form>
  )
}

