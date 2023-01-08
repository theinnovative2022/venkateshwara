import React from 'react'
import Sidebar from '../SideBar'

const TrackGrievance = () => {
    return (
        <div>
            <div className="row">
                <div className="p-2 col-md-3 border border-3 mt-5 text-center ">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container py-5">
                        <h5 className='bg-light p-3 col-md-10'>Grievance Details</h5>
                        <label htmlFor="">Complaint Number :</label><br />
                        <input className='border border-2 w-50 p-2' type="text" name="" id="" />
                        <div className='d-flex mt-3'>
                            <div className="btn btn-info mx-2 rounded-0">Submit</div>
                            <div className="btn btn-info mx-2 rounded-0">Clear</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackGrievance