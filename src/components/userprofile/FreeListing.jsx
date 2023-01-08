import React from 'react'
import Sidebar from './SideBar'

const FreeListing = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="p-2 col-md-3 border border-3 mt-5 text-center ">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 ">
                        <div className="container py-5">
                            <h5 className='bg-light p-3 col-md-10'>Please provide your Business details</h5>
                            <div className="container">
                                <main>
                                    <div className="row g-5">
                                        <div className="col-md-10 justify-content-center">
                                            <form className="needs-validation" novalidate="">
                                                <div className="row g-3">
                                                    <div className="col-sm-6">
                                                        <label for="company" className="form-label">Company name</label>
                                                        <input type="text" className="form-control" id="company" placeholder="Company Name" value="" required="" />
                                                        <div className="invalid-feedback">
                                                            Valid Company name is required.
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label for="city" className="form-label">City</label>
                                                        <input type="text" className="form-control" id="city" placeholder="City" value="" required="" />
                                                        <div className="invalid-feedback">
                                                            Valid city is required.
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label for="firstname" className="form-label">First name</label>
                                                        <input type="text" className="form-control" id="firstname" placeholder="First name" value="" required="" />
                                                        <div className="invalid-feedback">
                                                            Valid Company name is required.
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label for="lastname" className="form-label">Last Name</label>
                                                        <input type="text" className="form-control" id="lastname" placeholder="Last Name" value="" required="" />
                                                        <div className="invalid-feedback">
                                                            Valid city is required.
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <label for="email" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                                        <div className="invalid-feedback">
                                                            Please enter a valid email address for shipping updates.
                                                        </div>
                                                    </div>

                                                </div>

                                                <button className="w-100 btn btn-info btn-lg mt-2" type="submit">Send Enquiry</button>
                                            </form>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeListing
