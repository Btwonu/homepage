import './styles.css';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GridLoader from 'react-spinners/GridLoader';

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
import Video from './components/Video';
import Book from './components/Book';
import LoadingBar from './components/LoadingBar';

export default function App() {
	const STEP = 3;
	const [index, setIndex] = useState(STEP);
	const [articles, setArticles] = useState(db.articles.slice(0, STEP));

	const articleList = articles.map((article) => (
		<GridItem key={Number(article.id)} xs={4}>
			<Card
				id={Number(article.id)}
				title={article.title}
				description={article.description}
				url={article.url}
				done={article.done}
			/>
		</GridItem>
	));

	const videoList = db.videos.map((video) => (
		<Video key={video.id} url={video.url} done={video.done} />
	));

	const bookList = db.books.map((book) => (
		<Book
			key={book.id}
			title={book.title}
			description={book.description}
			done={book.done}
		/>
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
				<LoadingBar percentage={30} />

				<Section>
					<SlickSlider>{videoList && videoList}</SlickSlider>
				</Section>

				<Section>
					<Shell>{bookList && bookList}</Shell>
				</Section>

				<Section>
					<Shell>
						<InfiniteScroll
							style={{ overflow: 'visible' }}
							dataLength={articles.length}
							next={getArticles}
							hasMore={db.articles[index] !== undefined}
							loader={
								<GridLoader
									size={7}
									color="#93f458"
									cssOverride={{
										display: 'block',
										margin: '50px auto 0 auto',
									}}
								/>
							}
						>
							<Grid>{articleList && articleList}</Grid>
						</InfiniteScroll>
					</Shell>
				</Section>
			</Wrapper>
		</div>
	);
}
