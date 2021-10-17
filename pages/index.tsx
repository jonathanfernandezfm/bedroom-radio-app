import Head from 'next/head';
import { useEffect, useState } from 'react';
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
import AboutUs from '@components/AboutUs';

interface HomeProps {
	playlists: Playlist[];
}

var timeout: NodeJS.Timeout;
var timeoutMouse: NodeJS.Timeout | undefined;

const Home = ({ playlists }: HomeProps) => {
	const [loadingPlayer, setLoadingPlayer] = useState(true);
	const [modalVisible, toggleModalVisible] = useState(false);
	const [showPlayer, setShowPlayer] = useState(false);
	const [playlist, setPlaylist] = useState<Playlist>(playlists[0]);
	const [song, setSong] = useState<Cancion>(playlist?.canciones[0]);
	const [showInterface, toggleShowInterface] = useState(true);

	useEffect(() => {
		playlists[0].canciones = shuffle(playlists[0].canciones);
		setPlaylist(playlists[0]);

		setSong(playlists[0].canciones[0]);
	}, [playlists]);

	useEffect(() => {
		window.addEventListener('mousemove', interfaceOnMouse);

		return () => {
			window.removeEventListener('mousemove', interfaceOnMouse);
		};
	});

	const interfaceOnMouse = () => {
		if (!timeoutMouse)
			timeoutMouse = setTimeout(() => {
				toggleShowInterface(true);
			}, 100);

		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeoutMouse = undefined;
			toggleShowInterface(false);
		}, 5000);
	};

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
		<>
			<Head>
				<title>Bedroom Radio</title>
				<meta property="og:title" content="Bedroom Radio" key="title" />
				<meta
					name="description"
					content="Bedroom Radio existe para descubrir y amplificar la música de artistas hispanohablantes en todo el mundo. Nuestro objetivo es dar voz y un espacio seguro a todx artista emergente o con poca visibilidad."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="http://bedroomradio.es/" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0" />

				{/* FACEBOOK TAGS */}
				<meta property="og:type" content="web" />
				<meta property="og:title" content="Bedroom Radio" />
				<meta
					property="og:description"
					content="Bedroom Radio existe para descubrir y amplificar la música de artistas hispanohablantes en todo el mundo. Nuestro objetivo es dar voz y un espacio seguro a todx artista emergente o con poca visibilidad."
				/>
				<meta property="og:image" content="LINK TO THE IMAGE FILE" />
				<meta property="og:url" content="http://bedroomradio.es/" />
				<meta property="og:site_name" content="Bedroom Radio" />

				{/* TWITTER TAGS */}
				<meta name="twitter:title" content="Bedroom Radio" />
				<meta
					name="twitter:description"
					content="Bedroom Radio existe para descubrir y amplificar la música de artistas hispanohablantes en todo el mundo. Nuestro objetivo es dar voz y un espacio seguro a todx artista emergente o con poca visibilidad."
				/>
				<meta name="twitter:image" content="LINK TO IMAGE" />
				<meta name="twitter:site" content="@BedPodcast_" />
				<meta name="twitter:creator" content="@JonathanFdezM @_adrimartin"></meta>
			</Head>

			<main>
				{/* LOADING SCREEN */}
				<LoadScreen showPlayer={showPlayer} setShowPlayer={setShowPlayer} loadingStatus={loadingPlayer} />

				{/* MAIN PAGE */}
				<Modal toggleModalInfo={toggleModalInfo} visible={modalVisible}>
					<AboutUs />
				</Modal>
				<TopMenu toggleModalInfo={toggleModalInfo} showInterface={showInterface} />
				<div className="fixed z-30 flex justify-center w-full mt-6 ml-0 text-lg text-center text-white lg:ml-0 sm:ml-10 sm:justify-start lg:justify-center font-krona">
					<Logo2 width={120} />
				</div>

				{/* SONG RELATED INTERFACE */}
				<SongInfo song={song} showInterface={showInterface} />
				<SocialLinks song={song} showInterface={showInterface} />
				<YoutubePlayer
					nextSong={nextSong}
					prevSong={prevSong}
					song={song}
					showPlayer={showPlayer}
					setLoadingStatus={setLoadingPlayer}
					showInterface={showInterface}
				/>
			</main>
		</>
	);
};

Home.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_URL}/playlists`);
	const json = await res.json();
	return { playlists: json };
};

export default Home;
