import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const AllSchemes = () => {
    return (
        <div>
             <div className="text-center">
				<p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
					All Schemes
				</p>
			</div>
            {/* Post second */}
            <div className="career_div container text-decoration-none bg-white shadow p-3 mt-5 rounded-3">
           
                <div className="row">
                    <p>Ministry of finance & industry</p>
                    <NavLink to="/" className="text-decoration-none fs-4">Pradhan mantri yojana</NavLink>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat magni aut, veniam libero dolorem sit vero cum labore iste!</p>
                </div>
                <div className="row">
                    
                    <div className="col"><NavLink to="/" className="btn btn-light text-decoration-none">Pradhan mantri yojana</NavLink></div>
                    <NavLink to="/scheme1" className="col">   <i class="fa-solid fa-arrow-right  fs-3 float-end"> </i></NavLink>        
                    
              </div>
            </div>
            <div className="career_div container text-decoration-none bg-white shadow p-3 mt-5 rounded-3">
                <div className="row">
                    <p>Ministry of finance & industry</p>
                    <NavLink to="/" className="text-decoration-none fs-4">Pradhan mantri yojana</NavLink>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat magni aut, veniam libero dolorem sit vero cum labore iste!</p>
                </div>
                <div className="row">
                    
                    <div className="col"><NavLink to="/" className="btn btn-light text-decoration-none">Pradhan mantri yojana</NavLink></div>
                    <NavLink to="/" className="col">   <i class="fa-solid fa-arrow-right  fs-3 float-end"> </i></NavLink> 
                </div>
            </div>
            <div className="career_div container text-decoration-none bg-white shadow p-3 mt-5 rounded-3">
                <div className="row">
                    <p>Ministry of finance & industry</p>
                    <NavLink to="/" className="text-decoration-none fs-4">Pradhan mantri yojana</NavLink>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat magni aut, veniam libero dolorem sit vero cum labore iste!</p>
                </div>
                <div className="row">
                    
                    <div className="col"><NavLink to="/" className="btn btn-light text-decoration-none">Pradhan mantri yojana</NavLink></div>
                    <NavLink to="/" className="col">   <i class="fa-solid fa-arrow-right  fs-3 float-end"> </i></NavLink>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                </div>
            </div>
            <div className="career_div container text-decoration-none bg-white shadow p-3 mt-5 rounded-3">
                <div className="row">
                    <p>Ministry of finance & industry</p>
                    <NavLink to="/" className="text-decoration-none fs-4">Pradhan mantri yojana</NavLink>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat magni aut, veniam libero dolorem sit vero cum labore iste!</p>
                </div>
                <div className="row">
                    
                    <div className="col"><NavLink to="/" className="btn btn-light text-decoration-none">Pradhan mantri yojana</NavLink></div>
                    <NavLink to="/" className="col">   <i class="fa-solid fa-arrow-right  fs-3 float-end"> </i></NavLink> 
                </div>
            </div>
        </div>
    )
}

export default AllSchemes