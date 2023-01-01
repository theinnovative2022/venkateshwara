import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination, Autoplay } from "swiper";
import logo from "../../logo.svg";
import { useState } from "react";
import SchemeData from "./Scheme";
import './schemes.css'
import { NavLink } from "react-router-dom";

export default function Schemes() {

  const schemes = (item) => {
    return (
      <>
        <h5 className="text-start" key={item.id}>{item.Scheme_category}</h5><hr />
        <div className="container">
          <div className="row">
            <div className="col shadow scheme p-5 m-3">
              <i className="fa fa-user p-2"></i>
              <NavLink to={`/scheme1/${item.id}`} className="text-decoration-none">{item.Scheme_name}</NavLink>
            </div>
            <div className="col shadow scheme p-5 m-3" >
              <i className="fa fa-user p-2"></i>
              <NavLink to={`/scheme1/${item.id}`} className="text-decoration-none">Water tax</NavLink>
            </div>
            <div className="col shadow scheme p-5 m-3" >
              <i className="fa fa-user p-2"></i>
              <NavLink to={`/scheme1/${item.id}`} className="text-decoration-none">Water tax</NavLink>
            </div>
            <div className="col shadow scheme p-5 m-3" >
              <i className="fa fa-user p-2"></i>
              <NavLink to={`/scheme1/${item.id}`} className="text-decoration-none">Water tax</NavLink>
            </div>
            <div className="col shadow scheme p-5 m-3" >
              <i className="fa fa-user p-2"></i>
              <NavLink to={`/scheme1/${item.id}`} className="text-decoration-none">Water tax</NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="container schemes_container container-width-auto">
        <div className="schemes_slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src="https://www.paybima.com/blog/wp-content/uploads/2022/03/Best-Government-Investment-Schemes-in-India.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.paybima.com/blog/wp-content/uploads/2022/03/Best-Government-Investment-Schemes-in-India.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.paybima.com/blog/wp-content/uploads/2022/03/Best-Government-Investment-Schemes-in-India.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.paybima.com/blog/wp-content/uploads/2022/03/Best-Government-Investment-Schemes-in-India.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.paybima.com/blog/wp-content/uploads/2022/03/Best-Government-Investment-Schemes-in-India.jpg"
                alt="slide"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="schemes_container py-2 px-4 my-2 text-center">
          <p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
            all schemes
          </p>

          <div>
            {
              SchemeData.map(schemes)
            }
          </div>


        </div>
        <hr className="border-top border-3 opacity-50 my-0"></hr>
        <div className="video_container py-2 px-4 my-2 text-center m-auto">
          <p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 ">
            BRIEF ABOUT ALL SCHEMES
          </p>
          <div className="iframe_container_16_9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LXb3EKWsInQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="responsive_iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
