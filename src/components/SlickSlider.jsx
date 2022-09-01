import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	return (
		<StyledSlider>
			<Slider
				dots
				infinite
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
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
