import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	box-shadow: 0 0 2px 2px #93f45888;
	padding: 60px 55px;
	border-radius: 2px;
	font-weight: 500;
	overflow: hidden;

	&:hover .foot-nav {
		transform: translateY(0);
	}

	&.is-done {
		background: rgba(30, 30, 30, 0.2);
	}

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

	.foot-nav {
		display: flex;
		align-content: center;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		min-height: 120px;
		background: rgba(255, 255, 255, .7);
		box-shadow: 0px -5px 5px -6px rgba(51, 51 ,51 ,0.25);
		padding: 15px;
		transform: translateY(100%);
		transition: transform .4s ease;
	}

	.foot-btn {
		border: none;
		outline: none;
		appearance: none;
		padding: 6px 8px;
		align-self: center;
		background-color: #67ec0e;
		color: #fff;
		transition: all .4s ease;
		cursor: pointer;

		&:hover {
			background-color: #c5c5c5;
			color: #111;
		}
	}
`;

function Card({ id, title, description, url, done }) {
	const markAsDone = () => {
		console.log(`Card ${id} is clicked`);
	};

	return (
		<StyledCard className={done && 'is-done'}>
			<h2>
				<a href={url}>{title}</a>
			</h2>

			<p>{description}</p>

			<div className="foot-nav">
				<button className="foot-btn" onClick={markAsDone}>Mark as done</button>
			</div>
		</StyledCard>
	);
}

// Card.propTypes
Card.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
};

export default Card;
