import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Radio,
    RadioGroup,
    FormControlLabel,
    FormGroup,
    Checkbox,
    Select,
    MenuItem
    } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Database from "./Database.js";
export default function EditForm({data2,allData,index,show}) {
    const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState([]);
  const handleDelete = (i) => {
    var dataUpdated = data.filter(function (value, index) {
      return index !== i;
    });
    setData(dataUpdated);
  };
const validationSchema = Yup.object({
  fname: Yup.string().required("First Name is required")
  .matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
    .matches(/[a-z]/,"Password must contain a lowercase letter"),
});
  const formik = useFormik({
    initialValues: {
      fname:data2.fname,
          lname:data2.lname,
          email: data2.email,
          password:data2.password,
          gender:data2.gender,
          transport:data2.transport,
          nationality: data2.nationality,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
console.log(values)
allData[index] = values
setData(allData)
setShowCard(true)
}
  });

  return (
    <>
    {!showCard && <div className='card'>
      <form onSubmit={formik.handleSubmit}>
        
        <TextField
        className='element'
          fullWidth
          id="fname"
          name="fname"
          label="First name"
          value={formik.values.fname}
          onChange={formik.handleChange}
          error={formik.touched.fname && Boolean(formik.errors.fname)}
          helperText={formik.touched.fname && formik.errors.fname}
        />
        <TextField
          fullWidth
          id="lname"
          name="lname"
          label="Last Name"
          value={formik.values.lname}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div style={{margin : "10px"}}>
            <div>Select Gender : </div>
            <RadioGroup name="gender" value={formik.values.gender} onChange={formik.handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel value="female" control={<Radio />} label="female" />
            </RadioGroup>
            </div>
            <div style={{margin : "10px"}}>
            <div>Select Transport : </div>
            <FormGroup name="transport" value={formik.values.transport} onChange={formik.handleChange}>
              <FormControlLabel name="transport" value="bike " control={<Checkbox defaultChecked={(data2.transport).includes('bike ') ? true : false} />} label="bike" />
              <FormControlLabel name="transport" value="car " control={<Checkbox  defaultChecked={(data2.transport).includes('car ') ? true : false}/>} label="car" />
              <FormControlLabel name="transport" value="bus " control={<Checkbox defaultChecked={(data2.transport).includes('bus ') ? true : false}/>} label="bus" />
              <FormControlLabel name="transport" value="train " control={<Checkbox defaultChecked={(data2.transport).includes('train ') ? true : false}/>} label="train" />
              <FormControlLabel name="transport" value="plane " control={<Checkbox defaultChecked={(data2.transport).includes('plane ') ? true : false}/>} label="plane" />
            </FormGroup>
            </div>
            <div style={{margin : "10px"}}>

            <div>Select Nationality : </div>
            <FormGroup name="nationality"  >

  <Select
name="nationality"
    label="nationality"
    onChange={formik.handleChange}
    defaultValue={formik.values.nationality}
  >
    <MenuItem value="India">India</MenuItem>
    <MenuItem value="Canada">Canada</MenuItem>
    <MenuItem value="US">US</MenuItem>
    <MenuItem value="Dubai">Dubai</MenuItem>
  </Select>
  </FormGroup>
</div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Save Changes
        </Button>
      </form>
    </div>}
    {showCard === true ? (
        <Database
        showCard={show}
          data={data}
          indexDelete={handleDelete}
        ></Database>
      ) : null}
      </>
  );
};

