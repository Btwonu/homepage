import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

// Slider
const StyledSlider = styled.div`
	.slick-list {
		overflow: visible;
	}

	.slick-track {
		display: flex;
		margin: 0 -10px;
	}

	.slick-slide {
		padding: 0 10px;
		height: auto;

		> div {
			height: 100%;
		}
	}
`;

function SlickSlider({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<StyledSlider>
			<Slider {...settings}>{children}</Slider>
		</StyledSlider>
	);
}

export default SlickSlider;
