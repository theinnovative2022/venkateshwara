import React from "react";
import Footer from "../footer/Footer";
import Tree from "./Tree";
import logo from '../../logo.svg';
import { useState } from "react";
import './about.css'
import { AiFillCloseCircle, AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai'
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function About() {



	const photos = [
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},

		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
		{
			img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
		},
	];

	const [slideNumber, setSlideNumber] = useState(0)
	const [openModal, setOpenModal] = useState(false)


	//open modal
	const handleOpenModal = (index) => {
		setSlideNumber(index)
		setOpenModal(true)
	}

	// close modal
	const handleCloseModal = (index) => {
		setOpenModal(false)
	}

	//left slide
	const preSlide = (index) => {
		slideNumber === 0 ? setSlideNumber(photos.length - 1) : setSlideNumber(slideNumber - 1)
	}

	//right slide
	const nextSlide = (index) => {
		slideNumber + 1 === photos.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
	}

	return (

		<>
			{
				openModal &&
				<div className='sliderWrap'>
					<AiFillCloseCircle className='btnclose' onClick={handleCloseModal} />
					<AiFillLeftCircle className='btnleft' onClick={preSlide} />
					<AiFillRightCircle className='btnright' onClick={nextSlide} />
					<div className='fullScreenImage'>
						<img src={photos[slideNumber].img} alt="" />
					</div>
				</div>
			}
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
								photos.map((im, index) => {
									return (
										<SwiperSlide key={"ecommercePhoto" + index}><img src={im.img} onClick={() => handleOpenModal(index)} width="150" alt="ecommercePhotos" /></SwiperSlide>
									);
								})
							}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
}
