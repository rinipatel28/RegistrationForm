import React, { useState } from "react";
import "./RegisterForm.css";
import "./Database.css";
import Database from "./Database.js";
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from "formik";
import * as Yup from "yup";

export default function RegisterForm() {
  const SignupSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
  });
  const [sendData, setSendData] = useState(false);
  const [data, setData] = useState([]);
  const handleDelete = (i) => {
    var dataUpdated = data.filter(function (value, index) {
      return index !== i;
    });
    setData(dataUpdated);
  };
  return (
    <>
      <Formik
        initialValues={{
          fname:"",
          lname:"",
          email: "",
          password:"",
          gender: "",
          transport: "",
          nationality: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values,{resetForm}) => {
          setData([...data, values]);
          setSendData(true);
          resetForm();
          // console.log(values);
        }}
      >
        <div className="card">
          <Form id="form1">
            <div className="header">
              <b>Form</b>
            </div>
            <div className="body">
              <div className="element text">
                <label htmlFor="fname">First name :</label>
                <div>
                  <Field
                    className="same-dimensions"
                    type="text"
                    id="fname"
                    name="fname"
                    
                  />
                </div>
                <ErrorMessage
                  component="div"
                  name="fname"
                  className="invalid-feedback"
                />
              </div>
              <div className="element text">
                <label htmlFor="lname">Last name :</label>
                <div>
                  <Field
                    className="same-dimensions"
                    type="text"
                    id="lname"
                    name="lname"
                    
                  />
                </div>
              </div>
              
              <div className="element email">
                <label htmlFor="email">Email :</label>
                <div>
                  <Field
                    id="email"
                    className="same-dimensions"
                    type="email"
                    name="email"
                    
                  />
                </div>
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <div className="element text">
                <label htmlFor="password">Password :</label>
                <div>
                  <Field
                    className="same-dimensions"
                    type="password"
                    id="pasword"
                    name="password"
                  />
                </div>
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </div>
              <div className="element radiobutton">
                <label htmlFor="radiobuttons">Select gender :</label>
                <div
                  id="radiobuttons" 
                >
                  <div>
                    <Field type="radio" id="male" name="gender" value="male"/>
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              
              <div className="element checkbox">
                <label htmlFor="checkboxes">Select transport : </label>
                <div id="checkboxes" name="transports">
                  
                  <div>
                    <Field
                      id="bike"
                      type="checkbox"
                      name="transport"
                      value="bike "
                    />
                    <label htmlFor="bike">Bike</label>
                  </div>
                  <div>
                    <Field
                    id="car"
                      type="checkbox"
                      name="transport"
                      value="car "
                    />
                    <label htmlFor="car">Car</label>
                  </div>
                  <div>
                    <Field
                    id="bus"
                      type="checkbox"
                      name="transport"
                      value="bus "
                    />
                    <label htmlFor="bus">Bus</label>
                  </div>
                  <div>
                    <Field
                      id="train"
                      type="checkbox"
                      name="transport"
                      value="train "
                    />
                    <label htmlFor="train">Train</label>
                  </div>
                  <div>
                    <Field
                    id="plane"
                      type="checkbox"
                      name="transport"
                      value="plane "
                    />
                    <label htmlFor="plane">Plane</label>
                  </div>
                </div>
                <ErrorMessage
                  component="div"
                  name="transport"
                  className="invalid-feedback"
                />
              </div>
              <div className="element select">
                <label htmlFor="select">Nationality : </label>
                <Field
                as="select"
                  className="same-dimensions"
                  id="select"
                  name="nationality"
                >
                  <option hidden>Select nationality</option>
                  <option value="india" >India</option>
                  <option value="canada">Canada</option>
                  <option value="US">US</option>
                  <option value="dubai">Dubai</option>
                </Field>
              </div>
            </div>
            <div className="footer">
                 <Field
                    className="submit"
                    type="submit"
                    value="Submit"
                    name="submit"
                  />
            </div>
          </Form>
        </div>
      </Formik>
      {sendData === true ? (
        <Database
          data={data}
          indexDelete={handleDelete}
        ></Database>
      ) : null}
    </>
  );
}
