import React from 'react'
import Sidebar from './SideBar'

const Advertise = () => {
    return (
        <div>
            <div className="row">
                <div className="p-2 col-md-3 border border-3 mt-5 text-center ">
                    <Sidebar />
                </div>
                <div className="col-md-9 ">
                    <div className="container py-5">
                        <h5 className='bg-light p-3 col-md-10'>Please provide your Advertise details</h5>
                        <div className="container">
                            <main>
                                <div className="row g-5">
                                    <div className="col-md-10 justify-content-center">
                                        <form className="needs-validation" novalidate="">
                                            <div className="row g-3">
                                                <div className="col-md-12">
                                                    <label for="firstName" className="form-label">Company Name</label>
                                                    <input type="text" className="form-control" id="firstName" placeholder="Company Name" value="" required="" />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="contact" className="form-label">Contact Number</label>
                                                    <div className="input-group has-validation">
                                                        <input type="number" className="form-control" id="contact" placeholder="Contact Number" required="" />
                                                        <div className="invalid-feedback">
                                                            Your username is required.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="email" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label for="pin" className="form-label">Pin Code</label>
                                                    <div className="input-group has-validation">
                                                        <input type="number" className="form-control" id="pin" placeholder="Pin Code" required="" />
                                                        <div className="invalid-feedback">
                                                            Your Pin Code is required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label for="city" className="form-label">City</label>
                                                    <div className="input-group has-validation">
                                                        <input type="text" className="form-control" id="city" placeholder="City" required="" />
                                                        <div className="invalid-feedback">
                                                            Your City is required.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="address" className="form-label">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                                    <div className="invalid-feedback">
                                                        Please enter your  address.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="business" className="form-label">Business Type</label>
                                                    <input type="text" className="form-control" id="business" placeholder="Business Type" required="" />
                                                    <div className="invalid-feedback">
                                                        Please enter your  address.
                                                    </div>
                                                </div>


                                            </div>


                                            <button className="w-100 btn btn-info btn-lg mt-3" type="submit">Send Request</button>
                                        </form>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertise