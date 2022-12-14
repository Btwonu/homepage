import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBook = styled.div`
	padding: 20px;
	border: 2px solid darkred;
	height: 100%;

	h3 {
		margin-bottom: 20px;
	}

	a {
		&:hover {
			text-decoration: none;
		}
	}

	&.is-done {
		background: rgba(30, 30, 30, 0.2);
	}
`;

function Book({ title, description, done, url }) {
	return (
		<StyledBook className={done && 'is-done'}>
			<h3><a href={url}>{title}</a></h3>

			<p>{description}</p>
		</StyledBook>
	);
}

// Book.propTypes
Book.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
	url: PropTypes.string.isRequired,
};

export default Book;
