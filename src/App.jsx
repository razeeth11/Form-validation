import Button from '@mui/material/Button';
import { Formik, useFormik } from 'formik';
import { useState } from 'react';
import * as yup from "yup";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './App.css'

const formValidationSchema = yup.object({
  username: yup.string().min(8).required(),
  email: yup.string().email().required(),
  password : yup.string().min(8).required(),
});

export function Form() {
    const [hide,setHide] = useState(true)
   
    const style={
      type : hide ? "password" : "text"
    }
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
       label="Username" variant="filled" 
       error={formik.touched.username && formik.errors.username}
       helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
       />
        
       <TextField 
       name="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.email}
       label="E-mail" variant="filled" 
       error={formik.touched.email && formik.errors.email}
       helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
       />
        
       <TextField 
       name="password"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.password}
       type={style.type}
       label="Password" variant="filled"
       InputProps={{
        endAdornment: (
          <InputAdornment position="end" className='hide' onClick={()=> setHide(!hide) }>
            { hide ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </InputAdornment>
        ),
      }}
      error={formik.touched.password && formik.errors.password}
      helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null} 
       />
       
       <Button type='submit' variant="contained">Submit</Button>
       </form>
  )
}

