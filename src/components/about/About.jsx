import React from "react";
import Footer from "../footer/Footer";
import Tree from "./Tree";
import logo from '../../logo.svg';
import { useState } from "react";
import './about.css'
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function About() {

	const galleryData = [logo, logo, logo, logo, logo, logo, logo];
	console.log(galleryData.length);

	const [gallery, setGallery] = useState(galleryData);
	console.log(gallery.length);




	return (
		<>
			<div className="about_container container-width-auto container">
				<div className="px-3">
					<div className="text-center">
						<p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
							ABOUT us
						</p>
					</div>
					<div className="paragraph py-2 px-4 my-2 border-2 border">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page editors now use Lorem Ipsum as their default
						model text, and a search for 'lorem ipsum' will uncover many web
						sites still in their infancy. Various versions have evolved over the
						years, sometimes by accident, sometimes on purpose (injected humour
						and the like). Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin literature
						from 45 BC, making it over 2000 years old. Richard McClintock, a
						Latin professor at Hampden-Sydney College in Virginia, looked up one
						of the more obscure Latin words, consectetur, from a Lorem Ipsum
						passage, and going through the cites of the word in classical
						literature, discovered the undoubtable source. Lorem Ipsum comes
						from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
						(The Extremes of Good and Evil) by Cicero, written in 45 BC. This
						book is a treatise on the theory of ethics, very popular during the
						Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
						amet..", comes from a line in section 1.10.32. The standard chunk of
						Lorem Ipsum used since the 1500s is reproduced below for those
						interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
						Malorum" by Cicero are also reproduced in their exact original form,
						accompanied by English versions from the 1914 translation by H.
						Rackham.
					</div>
				</div>

	

				<hr className="border-top border-3 opacity-50 my-4"></hr>
				<div className="px-3">
					<div className="text-center">
						<p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
							organisation structure
						</p>
					</div>
					<div className="py-2 px-4 my-2 text-center d-flex justify-content-center">
						<Tree></Tree>
					</div>
				</div>

				<hr className="border-top border-3 opacity-50 my-4"></hr>
				<div className="px-3">
					<div className="text-center">
						<p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
							Gallery or events
						</p>
					</div>
					<div className="py-2 px-4 my-2 text-center d-flex justify-content-center">
						<Swiper
							modules={[Navigation, A11y, Autoplay]}
							spaceBetween={30}
							slidesPerView={2}
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
							autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }}
							loop={true}
						>
							{
								gallery.map((value, i) => {
									return (
										<SwiperSlide key={value + i}>
											<img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="galleryImage" className=" border border-3" height="200" />
										</SwiperSlide>
									)
								})
							}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
}
