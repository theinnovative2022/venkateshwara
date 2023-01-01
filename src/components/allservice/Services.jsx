import React from 'react'
import './services.css'
import { FaSort, FaFilter } from 'react-icons/fa'
import { BsPinMapFill, BsStar, BsStarFill } from 'react-icons/bs'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';
import ecommerceData from '../ecommerceData';

export default function Services() {


    // const [sortBy, setSortBy] = useState(1);

    return (
        <>
            <div className="container container-width-auto">

                <div className=''>
                    <div className="row text-center">
                        <div className="col">
                            <div className="dropdown">
                                <button className="btn btn-info px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className='d-flex align-items-center gap-1'>
                                        <FaSort></FaSort>
                                        Sort By
                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" href="/">Ascending</button></li>
                                    <li><button className="dropdown-item" href="/">Descending</button></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col">
                            <button className="btn btn-info px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className='d-flex align-items-center gap-1'>
                                    <FaFilter></FaFilter>
                                    Filter
                                </div>
                            </button>
                        </div>

                        <div className="col">
                            <button className="btn btn-info px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className='d-flex align-items-center gap-1'>
                                    <BsPinMapFill></BsPinMapFill>
                                    Map
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ecommerce_list my-5">
                    {
                        Object.entries(ecommerceData).map((value) => {
                            return (
                                <Link to={"view?id=" + value[0]} className="text-decoration-none" key={value[1].name + value[0]}>
                                    <div className="row shadow px-5 py-2 mb-3">
                                        <div className="col-md-4 align-items-center">
                                            <img src={value[1].image} alt="ecommerceItem" className='image_200 m-auto' />
                                        </div>
                                        <div className="col-md 8 align-self-center">
                                            <p className='fw-bold fs-5 mb-0'>{value[1].name}</p>
                                            <p className='mb-1 text-body'>
                                                {
                                                    [1, 2, 3, 4, 5].map((v, index) => {
                                                        if (index < value[1].rating && value[1].rating >= 0) {
                                                            return (
                                                                <BsStarFill key={value[1].name + "star" + index} />
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <BsStar key={value[1].name + "star" + index} />
                                                            )
                                                        }
                                                    })
                                                }
                                            </p>
                                            <p className='text-body'>{value[1].address}</p>
                                            <div className='row'>
                                                <div className="col">
                                                    <button className="btn btn-sm btn-primary w-100">CALL NOW</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
