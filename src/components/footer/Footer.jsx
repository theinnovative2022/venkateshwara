import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className='container-fluid text-dark bg-light'>
                <hr className="border-top border-3 opacity-50 "></hr>
                <div className="row">
                    <div className="col-md-3 text-dark ">
                        <img src="https://nmc.gov.in/assets/img/nmc_logo_Marathi.png" className='p-2 mt-2' alt="" />
                        <p>Powered by
                            Digital India
                            Digital India Corporation(DIC)
                            Ministry of Electronics & IT (MeitY)
                            Government of India®</p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <ul>
                            <p className='text-primary'>Quick Links</p>
                            <li className='text-uppercase'><NavLink to='/' className='text-dark text-decoration-none'> HOME</NavLink></li>
                            <li className='text-uppercase'><NavLink to='/about' className='text-dark text-decoration-none'> about us</NavLink></li>
                            <li className='text-uppercase'><NavLink to='/services/ecommerce' className='text-dark text-decoration-none'> services</NavLink></li>
                            <li className='text-uppercase'><NavLink to='/schemes' className='text-dark text-decoration-none'> schemes</NavLink></li>
                            <li className='text-uppercase'><NavLink to='/contact' className='text-dark text-decoration-none'> contact us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-3">
                        <ul>
                            <p className='text-primary'>Contact Us</p>
                            <li className='text-uppercase'> <i class="fa-solid fa-phone"></i> 020-67264872</li>
                            <li className='text-uppercase'><i class="fa-solid fa-phone"></i> 9607014391</li>
                            <li className='text-uppercase'><i class="fa-solid fa-envelopes-bulk"></i> info@gmail.com</li>
                            <li><i class="fa-solid fa-address-book p-1"></i>Madsangvi, Aurangabad road, Nashik-422002</li>
                        </ul>
                        <ul>
                            <p className='text-primary'>You Can Follow Us On</p>
                        </ul>
                        <ul className='d-flex '>
                            <li><i class="fa-brands fa-square-facebook text-secondary p-2 fs-5"></i></li>
                            <li><i class="fa-brands fa-square-instagram text-secondary p-2 fs-5"></i></li>
                            <li><i class="fa-brands fa-twitter p-2 fs-5 text-secondary"></i></li>
                            <li><i class="fa-brands fa-youtube  p-2 fs-5 text-secondary"></i></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-3">
                        <p className='text-primary'>Get Direction</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22605.43460090856!2d73.77412754796866!3d20.012696821307422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebade77b6b2d%3A0xe95b9b55a4380b08!2sNashik%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1667118107477!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            width="260"
                            title="Location Map"
                            height="200"
                            className="border border-3 p-2"
                        ></iframe>
                    </div>
                </div>
            </footer>
        </>
    )
}
