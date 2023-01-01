import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStar, BsPlusCircleFill, BsClockFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaShare, FaAddressBook } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5'
import ScrollText from 'react-scroll-text'
import { GrNext } from 'react-icons/gr'
import { NavLink, Link } from 'react-router-dom';
import './home.css'
// import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {

    // const achievementData=[
    //     {
    //         Image:"https://source.unsplash.com/random",
    //         p1:'A paragraph of text with an <a href="/">Read More</a>',
    //         p2:'A second row of text with a <a href="https://google.com">web link</a>',
    //         p3:'<p>An icon <BsPlusCircleFill/> inline with text</p>'
    //     }
    // ];
    // const [achievements, setAchievements] = useState(achievementData);

    return (
        <div className='container container-width-auto'>
            <div className="overflow-hidden">
                {/* slider  */}
                <div className='swiper_container'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide><a href='google.com'><img src="https://nulm.gov.in/images/SlideImage/Covid4.png" alt="slide" /></a></SwiperSlide>
                        <SwiperSlide><a href='google.com'><img src="https://nulm.gov.in/images/SlideImage/Covid4.png" alt="slide" /></a></SwiperSlide>
                        <SwiperSlide><a href='google.com'><img src="https://nulm.gov.in/images/SlideImage/Covid4.png" alt="slide" /></a></SwiperSlide>
                        <SwiperSlide><a href='google.com'><img src="https://nulm.gov.in/images/SlideImage/Covid4.png" alt="slide" /></a></SwiperSlide>
                        <SwiperSlide><a href='google.com'><img src="https://nulm.gov.in/images/SlideImage/Covid4.png" alt="slide" /></a></SwiperSlide>
                    </Swiper>
                </div>
                <hr className="border-top border-3 opacity-50"></hr>

                {/* <!-- Services Start --> */}
                <div className="container-fluid">
                    <div className="container">
                    <div className="text-center">
						<p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
							Citizens Services
						</p>
					</div>
                        <div className="row g-3 mt-3">
                           
                            <div className="col-lg-2 col-md-6">
                                <div className="service-item bg-light text-center p-5 ">
                                    <img src="/img/grievance.png" alt="" />
                                    <p>Grievance</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="service-item2 bg-light text-center p-5 ">
                                    <img src="/img/scheme.png" alt="" />
                                    <p>Schemes</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="service-item bg-light text-center p-5 ">
                                    <img src="/img/help.png" alt="" />
                                    <p>Help</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="service-item2 bg-light text-center p-5 ">
                                    <img src="/img/grievance.png" alt="" />
                                    <p>Schemes</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="service-item bg-light text-center p-5 ">
                                    <img src="/img/grievance.png" alt="" />
                                    <p>Schemes</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="service-item2 bg-light text-center p-5 ">
                                    <img src="/img/grievance.png" alt="" />
                                    <p>Schemes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Services End --> */}



                {/*Announcement */}
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-md-3 border border-secondary'>
                            <p className='text-center text-uppercase fw-bold fs-5 text-primary border-bottom border-secondary py-2 mb-0'>WHAT'S NEW</p>
                            <div className='py-2 overflow-auto'>
                                {/* Scrolling Announcements */}
                                <ul className='checkmark-list'>
                                    <p>Open a PDF file <NavLink to="/pdf.pdf" target="_blank">example</NavLink>.</p>
                                    <marquee width="60%" direction="up" height="100px" scrollamount="2">
                                        <li>Announcement 2</li>
                                        <li>Announcement 3</li>
                                        <li>Announcement 4</li>
                                        <li>Announcement 5</li>

                                    </marquee>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-auto d-inline-block">
                            <div className="vr h-100"></div>
                        </div>
                        <div className="col-md-8 px-3 border border-secondary text-center">
                            <p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
                                about department
                            </p>
                            <div className='about_body paragraph py-2 px-4 text-start'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-top border-3 opacity-50 my-4"></hr>

                <div className="achievement_container text-center">
                    <p className='d-inline-block text-center text-uppercase fs-5 fw-bold p-2 border-bottom border-dark border-3 mb-5'>ACHIEVEMENT AND SUCCESS STORIES</p>
                    <Swiper
                        slidesPerView={1}
                        modules={[Scrollbar, A11y]}
                        spaceBetween={10}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }
                        }
                        className='pb-4 row text-start'
                    >

                        {/* {
                    achievements.map((value,i)=>{
                        return(
                            <SwiperSlide key={i*Math.random()}>
                                    <article className='achievement'>
                                        <img src={value.Image} alt="achievement" />
                                        <div>
                                            <p dangerouslySetInnerHTML={{__html:value.p1}}></p>
                                            <p dangerouslySetInnerHTML={{__html:value.p2}}></p>
                                            <p dangerouslySetInnerHTML={{__html:value.p3}}></p>
                                        </div>
                                    </article>    
                            </SwiperSlide>
                        )
                    })
                } */}

                        <SwiperSlide className='col-md'>
                            <article className='shadow p-2 rounded bg-body'>
                                <div className="row">
                                    <div className="col justify-content-center">
                                        <img src="https://cafemutual.com/images/article_69890597561dc4d1b9ac8d_1397618603_0633960001641827611_x.jpg" className='rounded-circle image_200' alt="achievement" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md pt-3">
                                        <div>
                                            <p className='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum, voluptas vitae tempore consequuntur debitis?<NavLink to="/achievements">Read More</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide className='col-md'>
                            <article className='shadow p-2 rounded bg-body'>
                                <div className="row">
                                    <div className="col">
                                        <img src="https://cafemutual.com/images/article_69890597561dc4d1b9ac8d_1397618603_0633960001641827611_x.jpg" className='rounded-circle image_200' alt="achievement" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md pt-3">
                                        <div>
                                            <p className='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum, voluptas vitae tempore consequuntur debitis?<NavLink to="/achievements">Read More</NavLink></p>

                                        </div>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide className='col-md'>
                            <article className='shadow p-2 rounded bg-body'>
                                <div className="row">
                                    <div className="col">
                                        <img src="https://cafemutual.com/images/article_69890597561dc4d1b9ac8d_1397618603_0633960001641827611_x.jpg" className='rounded-circle image_200' alt="achievement" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md pt-3">
                                        <div>
                                            <p className='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum, voluptas vitae tempore consequuntur debitis?<NavLink to="/achievements">Read More</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide className='col-md'>
                            <article className='shadow p-2 rounded bg-body'>
                                <div className="row">
                                    <div className="col">
                                        <img src="https://cafemutual.com/images/article_69890597561dc4d1b9ac8d_1397618603_0633960001641827611_x.jpg" className='rounded-circle image_200' alt="achievement" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md pt-3">
                                        <div>
                                            <p className='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum, voluptas vitae tempore consequuntur debitis?<NavLink to="/achievements">Read More</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <hr className="border-top border-3 opacity-50 my-4"></hr>

                <div className="extra_container border border-2 border px-2 py-3">
                    {/* <p></p> */}
                    <div className="row">
                        <div className="col text-end">
                            <NavLink to="/services/ecommerce" className='btn border border-1 py-2 px-3'>VIEW ALL <GrNext /></NavLink>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col px-5">
                            <Swiper
                                modules={[Navigation, A11y]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className='border border-dark rounded border-2 position-relative' style={{ minHeight: "370px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active" data-bs-interval="1000">
                                                            <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item" data-bs-interval="1000">
                                                            <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item" data-bs-interval="1000">
                                                            <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 position-absolute w-100 bottom-0">
                                            <div className="row">
                                                <h5>Tushar Snacks</h5>
                                                <p>Nashik, aurangabad road, near mandir 422004</p>
                                                <div className="col">
                                                    <div className=' fs-1'>
                                                        <Link className="text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <IoCallSharp />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className=" text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaShare />
                                                            </p>
                                                        </Link></div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link href="https://www.google.com/maps/@18.8154266,76.7747674,6z" className="col text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaMapMarkerAlt />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='border border-dark rounded border-2 position-relative' style={{ minHeight: "370px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="">
                                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 position-absolute w-100 bottom-0">
                                            <div className="row">
                                                <h5>Tushar Snacks</h5>
                                                <p>Nashik, aurangabad road, near mandir 422004</p>
                                                <div className="col">
                                                    <div className=' fs-1'>
                                                        <Link className="text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <IoCallSharp />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className=" text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaShare />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className="col text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaMapMarkerAlt />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='border border-dark rounded border-2 position-relative' style={{ minHeight: "370px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="">
                                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 position-absolute w-100 bottom-0">
                                            <div className="row">
                                                <h5>Tushar Snacks</h5>
                                                <p>Nashik, aurangabad road, near mandir 422004</p>
                                                <div className="col">
                                                    <div className=' fs-1'>
                                                        <Link className="text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <IoCallSharp />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className=" text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaShare />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className="col text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaMapMarkerAlt />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='border border-dark rounded border-2 position-relative' style={{ minHeight: "370px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="">
                                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 position-absolute w-100 bottom-0">
                                            <div className="row">
                                                <h5>Tushar Snacks</h5>
                                                <p>Nashik, aurangabad road, near mandir 422004</p>
                                                <div className="col">
                                                    <div className=' fs-1'>
                                                        <Link className="text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <IoCallSharp />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className=" text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaShare />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className="col text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaMapMarkerAlt />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='border border-dark rounded border-2 position-relative' style={{ minHeight: "370px" }}>

                                        <div className="row">
                                            <div className="col">
                                                <div className="">
                                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="1000">
                                                                <img src="https://content.jdmagicbox.com/comp/mumbai/60/022p9007860/catalogue/gallops-restaurant-mahalaxmi-mumbai-continental-restaurants-rzvpsxq8hr.jpg?clr=#660027?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" height={200} class="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 position-absolute w-100 bottom-0">
                                            <div className="row">
                                                <h5>Tushar Snacks</h5>
                                                <p>Nashik, aurangabad road, near mandir 422004</p>
                                                <div className="col">
                                                    <div className=' fs-1'>
                                                        <Link className="text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <IoCallSharp />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className=" text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaShare />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className='fs-1'>
                                                        <Link className="col text-decoration-none text-body">
                                                            <p className='fs-2'>
                                                                <FaMapMarkerAlt />
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
