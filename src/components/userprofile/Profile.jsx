import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Sidebar from './SideBar'
import Footer from '../footer/Footer'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <div className="row">
                <div className="p-2 col-md-3 border border-3 mt-5 text-center ">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <section style={{ backgroundColor: "#eee;" }}>
                        <div class="container py-5">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card mb-4">
                                        <div class="card-body text-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                class="rounded-circle img-fluid" style={{ width: "150px;" }} />
                                            <h5 class="my-3">John Smith</h5>
                                            {/* <p class="text-muted mb-1">Full Stack Developer</p>
                                    <p class="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                                            <div class="justify-content-center mb-2">
                                                <NavLink to="/profile/edit" className="btn btn-primary"><AiFillEdit/> Edit My Profile</NavLink>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-8">
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Full Name</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">Johnatan Smith</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Email</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">example@example.com</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Phone</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">(097) 234-5678</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Mobile</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">(098) 765-4321</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Address</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Address</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Profile
