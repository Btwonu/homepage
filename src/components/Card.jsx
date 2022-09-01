import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	box-shadow: 0 0 2px 2px #93f45888;
	padding: 60px 55px;
	border-radius: 2px;
	font-weight: 500;

	h2 {
		margin-bottom: 20px;
	}

	a {
		text-decoration: none;
		color: #72bd43;
	}

	p {
		color: #395f22;
	}
`;

function Card({ id, title, description, url }) {
	return (
		<StyledCard>
			<h2>
				<a href={url}>{title}</a>
			</h2>

			<p>{description}</p>
		</StyledCard>
	);
}

// Card.propTypes
Card.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default Card;
