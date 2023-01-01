import React from 'react'
import "../news/News.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';


const News = () => {
    return (
        <div>
            <div className="container">
                <h5 className='p-2'><a href="">News</a>Indonesia president supports plan to scale back</h5>
                <img src="https://nulm.gov.in/images/SlideImage/PM_Banner_hindi.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-2 p-5 shadow mt-5 rounded-4">
                        <p>NEWS</p>
                        <h5 className='fw-bold'>Indonesia president supports plan to scale back</h5>
                        <p className='news_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam expedita deserunt voluptatem ad, adipisci omnis nostrum eius dicta aspernatur quae, dignissimos iusto commodi cupiditate beatae praesentium laudantium rerum eos incidunt alias quasi assumenda rem voluptates quo. Libero iusto excepturi ratione! Provident porro quaerat maiores quae exercitationem ex nobis praesentium numquam adipisci esse iure perspiciatis harum consequatur alias, ut aperiam qui aspernatur minus totam labore accusantium earum illum? Est molestiae, autem quaerat, placeat delectus ratione quas officiis quibusdam vitae totam commodi distinctio quo ducimus temporibus odit aut inventore iure! Mollitia quis error veniam molestias quas necessitatibus autem vero architecto beatae temporibus, facilis laudantium reprehenderit soluta unde alias odio sequi provident facere ipsam consectetur placeat quibusdam ad itaque possimus? Vitae quas doloribus non alias veniam quis, quia illum provident perspiciatis. Aliquam vitae deserunt voluptatum voluptas deleniti nobis at magnam quia commodi consequatur consequuntur numquam dolor odit, inventore explicabo, vero beatae quis sed eos corrupti excepturi recusandae dolores facilis quidem. Nostrum unde, corporis, non at provident minima et excepturi ea quis adipisci magni accusamus, tempore nulla eaque voluptas rem. Consequatur blanditiis dignissimos excepturi labore repudiandae omnis, veniam quasi architecto, doloribus amet nulla? Sed, iste corrupti minima temporibus quos vitae ea sequi repudiandae facere?</p>
                    </div>
                    <div className="col-md-3 m-2 shadow p-5 rounded-4 h-25 mt-5">
                        <i class="fa-sharp fa-solid fa-share-nodes float-end fs-3"></i>
                        <hr className='mt-5' />
                        <p>Posted by </p>
                        <p>Posted Date</p>
                    </div>
                </div>
            </div>

            <div className="text-center p-2">
                <p className="d-inline-block border-bottom border-dark border-3 text-center text-uppercase fw-bold fs-5  ml-5">
                    Related News
                </p>
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
                            <div className='border rounded border-2 position-relative' style={{ minHeight: "380px" }}>

                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <img src="https://static.wixstatic.com/media/bdf5c0be508d4bfb8f9ff957d387156a.jpg/v1/fill/w_551,h_570,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/bdf5c0be508d4bfb8f9ff957d387156a.jpg" alt="" className='img-fluid news_slide' width="271" height="270" />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 position-absolute w-100 bottom-0 text-center">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className='text-center'>AgriTech Business Prospects in 2080</h5>
                                            <p className='text-center'>This is your News article.
                                            </p>
                                            <NavLink to="/news1" className="btn btn-success rounded-0">
                                                Read More
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border  rounded border-2 position-relative' style={{ minHeight: "380px" }}>

                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <img src="https://static.wixstatic.com/media/11062b_22aec8595f784a679f03fe4145286f86~mv2.jpg/v1/fill/w_552,h_570,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_22aec8595f784a679f03fe4145286f86~mv2.jpg" className='img-fluid  news_slide' alt="" width="271" height="270" />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 position-absolute w-100 bottom-0  text-center">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className='text-center'>AgriTech Business Prospects in 2080</h5>
                                            <p className='text-center'>This is your News article.
                                            </p>
                                            <NavLink to="/news1" className="btn btn-success rounded-0">
                                                Read More
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded border-2 position-relative' style={{ minHeight: "380px" }}>

                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <img src="https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_552,h_570,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/229c5fec466b4150a2a89ce7d1344475.jpg" className='img-fluid  news_slide' alt="" width="271" height="270" />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 position-absolute w-100 bottom-0  text-center">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className='text-center'>AgriTech Business Prospects in 2080</h5>
                                            <p className='text-center'>This is your News article.
                                            </p>
                                            <NavLink to="/news1" className="btn btn-success rounded-0">
                                                Read More
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded border-2 position-relative' style={{ minHeight: "380px" }}>

                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <img src="https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_552,h_570,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/229c5fec466b4150a2a89ce7d1344475.jpg" alt="" className='img-fluid  news_slide' width="271" height="270" />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 position-absolute w-100 bottom-0  text-center">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className='text-center'>AgriTech Business Prospects in 2080</h5>
                                            <p className='text-center'>This is your News article.
                                            </p>
                                            <NavLink to="/news1" className="btn btn-success rounded-0">
                                                Read More
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded border-2 position-relative' style={{ minHeight: "380px" }}>

                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <img src="https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_552,h_570,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/229c5fec466b4150a2a89ce7d1344475.jpg" alt="" className='img-fluid  news_slide' width="271" height="270" />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 position-absolute w-100 bottom-0 text-center">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className='text-center'>AgriTech Business Prospects in 2080</h5>
                                            <p className='text-center'>This is your News article.
                                            </p>
                                            <NavLink to="/news1" className="btn btn-success rounded-0">
                                                Read More
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>



    )
}

export default News
