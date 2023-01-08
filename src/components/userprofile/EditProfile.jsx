import React from 'react'
import Sidebar from './SideBar'

const EditProfile = () => {
    return (
        <div>
            <div className="row">
                <div className="p-2 col-md-3 border border-3 mt-5 text-center ">
                    <Sidebar />
                </div>
                <div className="col-md-9 ">
                    <div className="container py-5">
                    <h5 className='bg-light p-3 col-md-10'>Please provide your Personal details</h5>
                        <div className="container">
                            <main>
                                <div className="row g-5">
                                    <div className="col-md-10 justify-content-center">
                                        <form className="needs-validation" novalidate="">
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <label for="firstName" className="form-label">First name</label>
                                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label for="lastName" className="form-label">Last name</label>
                                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                                    <div className="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="username" className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text">@</span>
                                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" />
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

                                                <div className="col-12">
                                                    <label for="address" className="form-label">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                                    <div className="invalid-feedback">
                                                        Please enter your  address.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="address2" className="form-label">Occupation</label>
                                                    <select className="form-select" id="country" required="">
                                                        <option value="">Select...</option>
                                                        <option>Student</option>
                                                        <option>Businessman</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a valid country.
                                                    </div>                                                </div>

                                                <div className="col-md-5">
                                                    <label for="country" className="form-label">Country</label>
                                                    <select className="form-select" id="country" required="">
                                                        <option value="">Choose...</option>
                                                        <option>United States</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a valid country.
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <label for="state" className="form-label">State</label>
                                                    <select className="form-select" id="state" required="">
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <label for="pin" className="form-label">Pin Code</label>
                                                    <input type="text" className="form-control" id="pin" placeholder="" required="" />
                                                    <div className="invalid-feedback">
                                                        Pin Code required.
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-4" />

                                            <button className="w-100 btn btn-info btn-lg" type="submit">Save</button>
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

export default EditProfile
