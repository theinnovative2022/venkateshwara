import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

const Sidebar = () => {
    return (
        <div>
            <div>
                <NavLink to="/profile" className='btn btn-info w-75 text-start  mt-1 text-decoration-none'>My profile </NavLink><br />
                <NavLink to="/profile/freelisting" className='btn btn-info w-75 text-start mt-1 text-decoration-none'>Free listing </NavLink><br />
                <NavLink to="/" className='btn btn-info w-75 text-start mt-1 text-decoration-none'>My favourites </NavLink><br />
                <NavLink to="/profile/advertise" className='btn btn-info w-75 text-start mt-1 text-decoration-none'>Advertise with us </NavLink><br />
                <div>
                    <a className='btn btn-info w-75 text-start mt-1 text-decoration-none dropdown-toggle' data-bs-toggle="collapse" href="#collapseExample" >Grievaces</a>
                    <div className="collapse m-0" id="collapseExample">
                        <NavLink to="/profile/mygrievance" className='btn btn-white border-0 w-75 text-start mt-1 text-decoration-none'>My Grievances </NavLink><br />
                        <NavLink to="/profile/registergrievance" className='btn  border-0 w-75 text-start mt-1 text-decoration-none'>Register Grievance </NavLink><br />
                        <NavLink to="/profile/trackgrievance" className='btn  border-0 w-75 text-start mt-1 text-decoration-none'>Track Grievance</NavLink><br />
                    </div>
                </div>
                <NavLink to="/profile/help" className='btn btn-info w-75 text-start mt-1 text-decoration-none'>Help and Enquiry </NavLink><br />
                <NavLink to="/" className='btn btn-danger w-75 text-start mt-1 text-decoration-none'>Logout <AiOutlineLogout /></NavLink>

            </div>
        </div>
    )
}

export default Sidebar
