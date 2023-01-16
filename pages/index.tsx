import Head from 'next/head';
import { useEffect, useState } from 'react';
import YoutubePlayer from '@components/YoutubePlayer';
import LoadScreen from '@components/LoadScreen';
import { Playlist } from '@models/Playlist';
import SongInfo from '@components/SongInfo';
import { SocialLinks } from '@components/SocialLinks';
import { Cancion } from '@models/Cancion';
import TopMenu from '@components/TopMenu';
import Modal from '@containers/Modal';
import Logo2 from 'svg/logo2';
import { shuffle } from 'utils/functions';
import AboutUs from '@components/AboutUs';
import LateralSlideRight from '@containers/LateralSlideRight';
import LateralSlideLeft from '@containers/LateralSlideLeft';
import { Artista } from '@models/Artista';
import TitlePlaylist from '@components/TitlePlaylist';
import ArtistInfo from '@components/ArtistInfo';
import PlaylistList from '@components/PlaylistList';
import { getCancion, getPlaylist, getPlaylists } from 'services/db_service';

interface HomeProps {
	songs: Cancion[];
}

var timeout: NodeJS.Timeout;
var timeoutMouse: NodeJS.Timeout | undefined;

const Home = ({ songs }: HomeProps) => {
	const [loadingPlayer, setLoadingPlayer] = useState(true);
	const [modalVisible, toggleModalVisible] = useState(false);
	const [showPlayer, setShowPlayer] = useState(false);
	const [song, setSong] = useState<Cancion>(songs[0]);
	const [showInterface, toggleShowInterface] = useState(true);
	const [showLateralSlideRight, toggleLateralSlideRight] = useState(false);
	const [showLateralSlideLeft, toggleLateralSlideLeft] = useState(false);
	const [selectedArtist, setSelectedArtist] = useState<Artista | undefined>(undefined);
	const [selectedPlaylist, setSelectedPlaylist] = useState<number>(0);

	useEffect(() => {
		setSong(songs[0]);
	}, [songs]);

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
		const index = songs.findIndex((s) => s.id_youtube === song?.id_youtube);
		if (index !== undefined) {
			if (songs.length - 1 === index) return setSong(songs[0]);
			if (index < songs.length) return setSong(songs[index + 1]);
		}
	};

	const prevSong = () => {
		const index = songs.findIndex((s) => s.id_youtube === song?.id_youtube);
		if (index !== undefined) {
			if (index === 0) return setSong(songs[songs.length - 1]);
			if (index > 0) return setSong(songs[index - 1]);
		}
	};

	const toggleModalInfo = (value?: boolean) => {
		if (value !== undefined) toggleModalVisible(value);
		else toggleModalVisible(!modalVisible);
	};

	const selectPlaylist = (value: number) => {
		setSelectedPlaylist(value);
		toggleLateralSlideLeft(false);
	};

	return (
		<>
			<Head>
				<title>Bedroom Radio</title>
				<meta property="og:title" content="Bedroom Radio" key="title" />
				<meta
					name="description"
					content="Bedroom Radio es una plataforma de música para descubrir y amplificar la música de artistas hispanohablantes en todo el mundo."
				/>
				{/* <meta name="robots" content="index, follow" /> */}
				<link rel="canonical" href="http://bedroomradio.es/" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0" />

				{/* SERVICE WORKER */}
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#111" />

				{/* FACEBOOK TAGS */}
				<meta property="og:type" content="web" />
				<meta property="og:title" content="Bedroom Radio" />
				<meta
					property="og:description"
					content="Bedroom Radio es una plataforma de música para descubrir y amplificar la música de artistas hispanohablantes en todo el mundo."
				/>
				<meta property="og:image" content="https://bedroomradio.es/bedroomradio.png" />
				<meta property="og:url" content="http://bedroomradio.es/" />
				<meta property="og:site_name" content="Bedroom Radio" />

				{/* TWITTER TAGS */}
				<meta name="twitter:title" content="Bedroom Radio" />
				<meta
					name="twitter:description"
					content="Bedroom Radio es una plataforma de música para descubrir y amplificar la música de artistas hispanohablantes en todo el mundo."
				/>
				<meta name="twitter:image" content="https://bedroomradio.es/bedroomradio.png" />
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

				{/* LATERAL SLIDE LEFT */}
				{/* <LateralSlideLeft show={showLateralSlideLeft} toggleLateralSlideLeft={toggleLateralSlideLeft}>
					<PlaylistList
						playlists={playlists}
						selectedPlaylist={selectedPlaylist}
						selectPlaylist={selectPlaylist}
					/>
				</LateralSlideLeft> */}

				{/* LATERAL SLIDE RIGHT */}
				<LateralSlideRight show={showLateralSlideRight} toggleLateralSlideRight={toggleLateralSlideRight}>
					<ArtistInfo song={song} setSelectedArtist={setSelectedArtist} artist={selectedArtist} />
				</LateralSlideRight>

				{/* PLAYLIST SELECTOR */}
				{/* {playlists.length > 1 && (
					<TitlePlaylist
						showInterface={showInterface}
						toggleShowPlaylists={toggleLateralSlideLeft}
						playlist={playlist}
					/>
				)} */}

				{/* TOP MENU */}
				<TopMenu toggleModalInfo={toggleModalInfo} showInterface={showInterface} />
				<div className="fixed z-30 flex justify-center w-full mt-6 text-lg text-center text-white font-michroma">
					<Logo2 width={120} />
				</div>

				{/* SONG RELATED INTERFACE */}
				<SongInfo
					song={song}
					showInterface={showInterface}
					toggleShowArtistInfo={toggleLateralSlideRight}
					setSelectedArtist={setSelectedArtist}
				/>
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
	let canciones: Cancion[] = [];

	const key = '61041829d77e270015296fc4';
	const playlist = getPlaylist(key);
	console.log(key, playlist.canciones);
	canciones = playlist.canciones.map((c) => getCancion(c));

	const shufledCanciones = shuffle(canciones) as Cancion[];
	canciones = [...shufledCanciones.filter((c) => c.estreno), ...shufledCanciones.filter((c) => !c.estreno)];

	return { songs: canciones };
};

export default Home;
