import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	box-shadow: 0 0 2px 2px rgba(20, 20, 20, 0.2);
	padding: 60px 55px;
	border-radius: 2px;

	h2 {
		margin-bottom: 20px;
	}

	a {
		text-decoration: none;
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
