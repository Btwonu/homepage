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

const generateItems = () => Array.from({ length: 20 });

export default function App() {
	const [articles, setArticles] = useState(db.articles);
	const [items, setItems] = useState(generateItems());

	const cardList = db.articles.map((article) => <Card key={article.id} {...article} />);

	const getArticles = () => {
		setTimeout(() => {
			const additionalArticles = [
				{
					id: '3',
					title: 'Something new',
					description: 'Placeholder text',
					url: 'https://pomb.us/build-your-own-react/',
				},
				{
					id: '4',
					title: 'Some other article',
					description: 'Something else else other',
					url: 'https://alistapart.com/article/mobile-first-css-is-it-time-for-a-rethink/',
				},
			];

			setArticles((prevState) => [...prevState, ...additionalArticles]);
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
			<Shell>
				<Section>
					<SlickSlider>{cardList && cardList}</SlickSlider>
				</Section>

				<Section>
					<InfiniteScroll
						dataLength={items.length}
						next={getItems}
						hasMore
						loader={<h4>Loading...</h4>}
					>
						{items &&
							items.map((item, index) => <div key={index}>{index}</div>)}
					</InfiniteScroll>
				</Section>
			</Shell>
		</div>
	);
}
