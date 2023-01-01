import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ecommerceData from '../ecommerceData'
import { BsStarFill, BsStar, BsPlusCircleFill, BsClockFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaShare, FaAddressBook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoCallSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';
import logo from '../../logo.svg'

export default function View() {
    const [sp] = useSearchParams();
    const id = sp.get('id');
    if (!id) {
        return (
            <div className="container container-width-auto text-center text-danger">
                cannot find the shop you want to view.
            </div>
        )
    }
    const ecommerce = ecommerceData[id];
    const photos = [
        logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo
    ];
    return (
        <>
            <div className="container container-width-auto">
                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={ecommerce.image} height="500" class="d-block w-100" alt={ecommerce.image} />
                            </div>
                            <div class="carousel-item">
                                <img src={ecommerce.image} height="500" class="d-block w-100" alt={ecommerce.image} />
                            </div>
                            <div class="carousel-item">
                                <img src={ecommerce.image} height="500" class="d-block w-100" alt={ecommerce.image} />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <p className='fs-4 fw-bold pt-2 pb-0 mb-0 text-primary'>{ecommerce.name}</p>
                <p className='mb-2'>{ecommerce.address}</p>
                <hr className="border-top border-3 opacity-50 my-0"></hr>
                <div className='fs-4 my-0 d-flex align-items-center'>
                    <p className='my-0 fs-5 me-2'>Rating:</p>
                    {
                        [1, 2, 3, 4, 5].map((v, index) => {
                            if (index < ecommerce.rating && ecommerce.rating >= 0) {
                                return (
                                    <BsStarFill key={ecommerce.name + "star" + index} />
                                )
                            }
                            else {
                                return (
                                    <BsStar key={ecommerce.name + "star" + index} />
                                )
                            }
                        })
                    }
                </div>
                <hr className="border-top border-3 opacity-50 my-2"></hr>
                <div className="row text-center my-3">
                    <Link className="col text-decoration-none text-body">
                        <p className='fs-2'>
                            <IoCallSharp />
                        </p>
                        <p className='fs-5'>Call</p>
                    </Link>
                    <Link className="col text-decoration-none text-body">
                        <p className='fs-2'>
                            <FaMapMarkerAlt />
                        </p>
                        <p className='fs-5'>Map</p>
                    </Link>
                    <Link className="col text-decoration-none text-body">
                        <p className='fs-2'>
                            <IoLogoWhatsapp />
                        </p>
                        <p className='fs-5'>Whatsapp</p>
                    </Link>
                    <Link className="col text-decoration-none text-body">
                        <p className='fs-2'>
                            <FaShare />
                        </p>
                        <p className='fs-5'>Share</p>
                    </Link>
                </div>
                <div className='text-center'>
                    <Link to={{}} className='btn btn-primary w-50 mb-3'>Book Appointment</Link>
                </div>
                <div className='fs-4'>
                    <p className='fs-5 my-0'>Rate this:</p>
                    <p className=''>
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                    </p>
                </div>
                <div className=''>
                    <div className="row align-items-center">
                        <div className="col">
                            <p className='fs-5 mt-0 mb-2'>Photos</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-sm btn-secondary px-5 my-2 text-end">UPLOAD PHOTOS</button>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        modules={[Scrollbar, A11y]}
                        spaceBetween={10}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 8,
                                spaceBetween: 5,
                            },
                        }
                        }
                        className='pb-3 row text-center'
                    >
                        {
                            photos.map((im, i) => {
                                return (
                                    <SwiperSlide key={"ecommercePhoto" + i}><img src="https://content3.jdmagicbox.com/comp/mumbai/a8/022pxx22.xx22.220606174044.v3a8/catalogue/-dn0qokjc4n.jpg" alt="ecommercePhotos" /></SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
                <hr className="border-top border-3 opacity-50 my-2"></hr>
                <div>
                    <div className='d-flex align-items-center'>
                        <FaAddressBook className='fs-2 me-3' />
                        <div>
                            <p className='mb-1'>A paragraph of text with an <a href="/">unassigned link</a></p>
                            <p className='mb-1'>A second row of text with a <a href="https://google.com">web link</a></p>
                            <p className='mb-1'>An icon <BsPlusCircleFill /> inline with text</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center my-4'>
                        <BsClockFill className='fs-2 me-3' />
                        <p className='mb-1 text-uppercase'>Opens at 10 am</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <IoCallSharp className='fs-2 me-3' />
                        <p className='mb-1 text-uppercase'>9876543210</p>
                    </div>
                </div>
            </div>
        </>
    )
}
