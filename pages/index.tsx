import Head from 'next/head';
import React, { useState } from 'react';
import YoutubePlayer from '@components/YoutubePlayer';
import LoadScreen from '@components/LoadScreen';
import { Playlist } from '@models/Playlist';
import TitlePlaylist from '@components/TitlePlaylist';
import SongInfo from '@components/SongInfo';
import { SocialLinks } from '@components/SocialLinks';

interface HomeProps {
	playlists: Playlist[];
}

const Home = ({ playlists }: HomeProps) => {
	const [loadingPlayer, setLoadingPlayer] = useState(true);
	const [showPlayer, setShowPlayer] = useState(false);

	return (
		<div>
			<Head>
				<title>📺 Bedroom Radio</title>
			</Head>

			<main>
				<LoadScreen showPlayer={showPlayer} setShowPlayer={setShowPlayer} loadingStatus={loadingPlayer} />
				<TitlePlaylist name={playlists[0].nombre} />
				<SongInfo title={playlists[0].nombre} artist={'Pepe'} />
				<SocialLinks link_youtube={''} link_spotify={''} />
				<YoutubePlayer playlist={playlists[0]} showPlayer={showPlayer} setLoadingStatus={setLoadingPlayer} />
			</main>

			<footer></footer>
		</div>
	);
};

Home.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_URL}/playlists`);
	const json = await res.json();
	return { playlists: json };
};

export default Home;
