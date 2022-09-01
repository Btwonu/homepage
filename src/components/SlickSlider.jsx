import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled.div`
	.slick-slider {
		margin: 0 -10px;
	}

	.slick-list {
		overflow: visible;
	}

	.slick-track {
		display: flex;
	}

	.slick-slide {
		padding: 0 10px;
		height: auto;

		> div {
			height: 100%;
		}
	}

	.slick-arrow {
		position: absolute;
		z-index: 2;
		color: #000;
		background: #fff;
		height: 100%;
		width: 70px;
		opacity: 0.4;

		&:before,
		&:after {
			font-size: 45px;
			opacity: 1;
			color: #111;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.slick-prev {
		left: 0;

		&:before {
			margin-left: 9px;
		}
	}

	.slick-next {
		right: 0;

		&:before {
			margin-right: 9px;
		}
	}
`;

function SlickSlider({ children }) {
	return (
		<StyledSlider>
			<Slider
				dots
				infinite
				speed={500}
				slidesToShow={2}
				slidesToScroll={1}
				responsive={[
					{ breakpoint: 767, settings: { slidesToShow: 1 } },
				]}
			>
				{children}
			</Slider>
		</StyledSlider>
	);
}

// SlickSlider.propTypes
SlickSlider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SlickSlider;
