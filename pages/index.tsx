import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import YoutubePlayer from '@components/YoutubePlayer';
import LoadScreen from '@components/LoadScreen';
import { Playlist } from '@models/Playlist';
import SongInfo from '@components/SongInfo';
import { SocialLinks } from '@components/SocialLinks';
import { Cancion } from '@models/Cancion';
import TopMenu from '@components/TopMenu';
import Modal from '@components/Modal';
import Logo2 from 'svg/logo2';
import { shuffle } from 'utils/functions';

interface HomeProps {
	playlists: Playlist[];
}

const Home = ({ playlists }: HomeProps) => {
	const [loadingPlayer, setLoadingPlayer] = useState(true);
	const [modalVisible, toggleModalVisible] = useState(false);
	const [showPlayer, setShowPlayer] = useState(false);
	const [playlist, setPlaylist] = useState<Playlist>(playlists[0]);
	const [song, setSong] = useState<Cancion>(playlist?.canciones[0]);

	useEffect(() => {
		playlists[0].canciones = shuffle(playlists[0].canciones);
		setPlaylist(playlists[0]);

		setSong(playlists[0].canciones[0]);
	}, [playlists]);

	const nextSong = () => {
		const index = playlist?.canciones.findIndex((s) => s.id_youtube === song?.id_youtube);
		if (index !== undefined) {
			if (playlist?.canciones.length - 1 === index) return setSong(playlist?.canciones[0]);
			if (index < playlist?.canciones?.length) return setSong(playlist?.canciones[index + 1]);
		}
	};

	const prevSong = () => {
		const index = playlist?.canciones.findIndex((s) => s.id_youtube === song?.id_youtube);
		if (index !== undefined) {
			if (index === 0) return setSong(playlist?.canciones[playlist.canciones.length - 1]);
			if (index > 0) return setSong(playlist?.canciones[index - 1]);
		}
	};

	const toggleModalInfo = (value?: boolean) => {
		if (value !== undefined) toggleModalVisible(value);
		else toggleModalVisible(!modalVisible);
	};

	return (
		<div>
			<Head>
				<title>📺 Bedroom Radio</title>
			</Head>

			<main>
				<Modal toggleModalInfo={toggleModalInfo} visible={modalVisible}>
					<div className="flex justify-center m-auto">
						<Logo2 width={200} />
					</div>
					<div className="mt-10">
						<div className="text-lg text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eum! Commodi voluptates
							tenetur quisquam facere animi quia debitis et dolores obcaecati, doloremque quasi itaque
							architecto, facilis repellat ex recusandae impedit a ducimus.
						</div>
						<hr className="mx-4 my-10" />
						<div className="">
							Podcast: <a href="#">enlace</a>
						</div>
						<div>
							Magazine: <a href="#">enlace</a>
						</div>
						<div>
							Creadores: <a href="#">enlace</a>
						</div>
						<div>
							Web: <a href="#">enlace</a>
						</div>
						<div></div>
					</div>
				</Modal>
				<LoadScreen showPlayer={showPlayer} setShowPlayer={setShowPlayer} loadingStatus={loadingPlayer} />
				<TopMenu toggleModalInfo={toggleModalInfo} />
				{/* <TitlePlaylist playlist={playlist} /> */}
				<div className="fixed z-30 flex justify-center w-full mt-6 text-lg text-center text-white sm:ml-10 sm:justify-start md:justify-center font-krona">
					<Logo2 width={120} />
				</div>
				<SongInfo song={song} />
				<SocialLinks song={song} />
				<YoutubePlayer
					nextSong={nextSong}
					prevSong={prevSong}
					song={song}
					playlist={playlists[0]}
					showPlayer={showPlayer}
					setLoadingStatus={setLoadingPlayer}
				/>
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
