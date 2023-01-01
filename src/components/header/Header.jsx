import React, { useState } from "react";
import logo from "../../logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.css";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn } from 'mdb-react-ui-kit';


export default function Header() {
	const [searchQuery, setsearchQuery] = useState("");
	const location = useLocation().pathname;
	return (
		<>
			<div className="container-fluid p-1">


				<NavLink className="me-2   " aria-current="page" to="/login"> LOGIN</NavLink>
				<NavLink className="me-2   " aria-current="page" to="/register"> SIGNUP</NavLink>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light mb-2">
				<div className="container-fluid">
					<NavLink className="navbar-brand p-2 col-md-4" to="/">
						<img src="https://nmc.gov.in/assets/img/nmc_logo_Marathi.png" alt="" className="" />
					</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">ABOUT</NavLink>
							</li>
							<div className="nav-item dropdown">
								<a to="/services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">SERVICES</a>
								<div className="dropdown-menu m-0">
									<NavLink to="/services/ecommerce" className="dropdown-item">ECOMMERCE</NavLink>
									<NavLink to="/services/permissions" className="dropdown-item">PERMISSIONS</NavLink>

								</div>
							</div>
							<div className="nav-item dropdown">
								<NavLink to="/schemes" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">SCHEMES</NavLink>
								<div className="dropdown-menu m-0">
									<NavLink to="/schemes" className="dropdown-item">ALL SCHEMES</NavLink>
									<NavLink to="/schemes/pcmc" className="dropdown-item">PCMC</NavLink>
									<NavLink to="/schemes/startup" className="dropdown-item">STARTUP SCHEME</NavLink>
									<NavLink to="/schemes/swachhbharat" className="dropdown-item">SWACHH BHARAT</NavLink>
								</div>
							</div>
							<li className="nav-item">
								<NavLink className="nav-link active " aria-current="page" to="/news">NEWS</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link active" aria-current="page" to="/contact">CONTACT</NavLink>
							</li>

						</ul>

					</div>
				</div>
			</nav >
			{/* <form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form> */}

		</>
	);
}
