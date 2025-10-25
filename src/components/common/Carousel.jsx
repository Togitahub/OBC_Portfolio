import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<div className="w-full md:px-5 opacity-85">
			<Slider {...settings}>
				{images.map((image) => (
					<img src={image} className="rounded-2xl" />
				))}
			</Slider>
		</div>
	);
};

export default Carousel;