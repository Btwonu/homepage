import './styles.css';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Database
import db from './db.json';

// Custom components
import SlickSlider from './components/SlickSlider';
import Card from './components/Card';
import Section from './components/Section';
import Shell from './components/Shell';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Wrapper from './components/Wrapper';

export default function App() {
	const STEP = 3;
	const [index, setIndex] = useState(STEP);
	const [articles, setArticles] = useState(db.articles.slice(0, STEP));

	const cardList = articles.map((article) => (
		<GridItem key={Number(article.id)} xs={4}>
			<Card
				id={Number(article.id)}
				title={article.title}
				description={article.description}
				url={article.url}
			/>
		</GridItem>
	));

	const getArticles = () => {
		setTimeout(() => {
			const newArticles = db.articles.slice(index, index + STEP);
			const updatedArticles = [...articles, ...newArticles];

			setIndex((prevIndex) => prevIndex + STEP);

			return setArticles(updatedArticles);
		}, 1500);
	};

	return (
		<div className="App">
			<Wrapper>
				<Section>
					<Shell>
						<SlickSlider>{cardList && cardList}</SlickSlider>
					</Shell>
				</Section>

				<Section>
					<Shell>
						<InfiniteScroll
							style={{ overflow: 'visible' }}
							dataLength={articles.length}
							next={getArticles}
							hasMore={db.articles[index] !== undefined}
							loader={<h4>Loading articles...</h4>}
						>
							<Grid>{cardList && cardList}</Grid>
						</InfiniteScroll>
					</Shell>
				</Section>
			</Wrapper>
		</div>
	);
}
