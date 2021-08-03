import Head from 'next/head';
import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import LoadScreen from '../components/LoadScreen';

const Home = () => {
	const [loadingPlayer, setLoadingPlayer] = useState(true);
	const [showPlayer, setShowPlayer] = useState(false);

	return (
		<div>
			<Head>
				<title>📺 Bedroom Radio</title>
			</Head>

			<main>
				<LoadScreen showPlayer={showPlayer} setShowPlayer={setShowPlayer} loadingStatus={loadingPlayer} />
				<YoutubePlayer showPlayer={showPlayer} setLoadingStatus={setLoadingPlayer} />
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
