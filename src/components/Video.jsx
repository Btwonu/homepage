import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledVideo = styled.div`
	position: relative;
	min-height: 320px;

	&.is-done {
		&:before {
			content: '';
			position: absolute;
			z-index: 1;
			pointer-events: none;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(120, 120, 120, 0.4);
		}
	}

	iframe {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
`;

function Video({ url, done }) {
	const regex = /watch\?v=/;
	const embedUrl = url.replace(regex, 'embed/');

	return (
		<StyledVideo className={done && 'is-done'}>
			<iframe
				src={embedUrl}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
				allowFullScreen
			/>
		</StyledVideo>
	);
}

// Video.propTypes
Video.propTypes = {
	url: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
};

export default Video;
