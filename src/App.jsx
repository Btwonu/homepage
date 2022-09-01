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

const generateItems = () => Array.from({ length: 20 });

export default function App() {
	const [articles, setArticles] = useState(db.articles.slice(0, 2));
	const [items, setItems] = useState(generateItems());
	const [i, setI] = useState(2);

	console.log({ articles });

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

	console.log({ cardList });

	const getArticles = () => {
		setTimeout(() => {
			console.log(i);

			const newArticle = db.articles[i];

			if (!newArticle) {
				return setArticles(articles);
			}

			setI((prevI) => prevI + 1);

			console.log({ newArticle });

			const updatedArticles = [...articles, newArticle];

			setArticles(updatedArticles);
		}, 1500);
	};

	const getItems = () => {
		setTimeout(() => {
			const newItems = items.concat(generateItems());
			setItems(newItems);
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
							hasMore={db.articles[i] !== undefined}
							loader={<h4>Loading articles...</h4>}
						>
							<Grid xs={3}>{cardList && cardList}</Grid>
						</InfiniteScroll>
					</Shell>
				</Section>
			</Wrapper>
		</div>
	);
}
