import React from "react";
import { TextField, Button } from "@mui/material";
import { useRef } from "react";
import logo from '../../logo.svg'
import { NavLink } from "react-router-dom";

export default function Login() {
  const formRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Login not implemented!");
    formRef.current.reset();
  }

  return (
    <div>
      <>
        <div className="contact_container container-width-auto container">
          <div className="text-center">
            <p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
              log in
            </p>
          </div>
          <div className="row py-3 align-items-center m-auto">
            <div className="col">
              <div className="iframe_container">
                <img src="http://www.murtidaan.nmc.gov.in/assets/logo/nmc_logo.png" alt="companylogo" className="responsive_iframe" />
              </div>
            </div>
            <div className="col">

              <form onSubmit={handleFormSubmit} ref={formRef}>
                <TextField name="email" margin='normal' type="email" placeholder='loremipsum@abc.com' variant='outlined' label="Email Id" fullWidth required></TextField>
                <TextField name="password" margin='normal' type="password" placeholder='password' variant='outlined' label="Password" fullWidth required></TextField>
                {/* <TextField name="mobileNo" margin='normal' type="number" placeholder='+91 9876543210' variant='outlined' label="Contact No"  fullWidth required></TextField>
					<TextField name="message" margin='normal' type="text" placeholder='Your meesage' variant='outlined' label="Message" minRows={4} multiline fullWidth required></TextField> */}
                <NavLink className="d-block ps-1 text-secondary text-decoration-none">Forgot Password</NavLink>
                <Button  type="submit" variant="contained" className='px-4 my-2'>Login</Button>
                <NavLink to="/register" className="d-block ps-1 text-secondary">Dont have an account, register here</NavLink>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
