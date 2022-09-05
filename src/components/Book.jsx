import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBook = styled.div``;

function Book({ title, description }) {
	return (
		<StyledBook>
			<h3>{title}</h3>

			<p>{description}</p>
		</StyledBook>
	);
}

// Book.propTypes
Book.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Book;
