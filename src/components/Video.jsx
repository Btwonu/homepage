import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledVideo = styled.div`
	iframe {
		width: 100%;
		min-height: 320px;
	}
`;

function Video({ url }) {
	const regex = /watch\?v=/;
	const embedUrl = url.replace(regex, 'embed/');

	return (
		<StyledVideo>
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
};

export default Video;
