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
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { CgCoffee } from 'react-icons/cg';

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
		<div>
			<Head>
				<title>📺 Bedroom Radio</title>
			</Head>

			<main>
				<LoadScreen showPlayer={showPlayer} setShowPlayer={setShowPlayer} loadingStatus={loadingPlayer} />
				<div>
					<Modal toggleModalInfo={toggleModalInfo} visible={modalVisible}>
						<div className="flex justify-center m-auto my-4 sm:my-0">
							<Logo2 width={180} />
						</div>
						<div className="mt-6 sm:mt-10">
							<div className="text-justify">
								<div>
									<b>Bedroom Radio</b> existe para descubrir y amplificar la música de artistas
									hispanohablantes en todo el mundo.
								</div>
								<div className="mt-2">
									Nuestro objetivo es dar voz y un espacio seguro a todx artista emergente o con poca
									visibilidad.
								</div>
								<div className="mt-2">Somos un equipo que está aquí por amor a la música.</div>
							</div>
							<hr className="my-6 " />
							<div className="flex justify-around">
								<div className="text-center">
									<div>Created by:</div>
									<div className="font-bold">Adrián Martín</div>
									<div className="flex justify-between mt-2">
										<a href="https://www.instagram.com/_adrimartin/"
											target="_blank"
											className="text-blue-400 hover:scale-110"
											rel="noreferrer"
										>
											<FaInstagram />
										</a>
										<a href="https://twitter.com/_adrimartin"
											target="_blank"
											className="text-blue-400 hover:scale-110"
											rel="noreferrer"
										>
											<FaTwitter />
										</a>
										<a href="https://www.linkedin.com/in/adrian-martin-jaimez/"
											target="_blank"
											className="text-blue-400 hover:scale-110"
											rel="noreferrer"
										>
											<FaLinkedin />
										</a>
										{/* <a href="" className="text-blue-400 hover:scale-110"> 
											<FaGithub />*/}
									</div>
								</div>
								<div className="text-center">
									<div>Built by:</div>
									<div className="font-bold">Jonathan F.M.</div>
									<div className="flex justify-between mt-2">
										<a
											href="https://www.instagram.com/jonathanfdez_poak/"
											target="_blank"
											className="text-blue-400 hover:scale-110"
											rel="noreferrer"
										>
											<FaInstagram />
										</a>
										<a
											href="https://twitter.com/JonathanFdezM"
											target="_blank"
											className="text-blue-400 hover:scale-110"
											rel="noreferrer"
										>
											<FaTwitter />
										</a>
										<a
											href="https://www.linkedin.com/in/jonathanfernandezfm/"
											target="_blank"
											className="text-blue-400 hover:scale-110"
											rel="noreferrer"
										>
											<FaLinkedin />
										</a>
										<a
											href="https://github.com/jonathanfernandezfm"
											target="_blank"
											className="text-blue-400 transition hover:scale-110"
											rel="noreferrer"
										>
											<FaGithub />
										</a>
									</div>
								</div>
							</div>
							<div className="justify-center w-full mt-8 text-xs">
								<div className="flex justify-center mb-4">
									<a
										href="https://www.buymeacoffee.com/jonathanfm"
										className="flex items-center gap-2 text-lg text-blue-400 transition hover:scale-105"
										target="_blank"
										rel="noreferrer"
									>
										Apoyanos <CgCoffee />
									</a>
								</div>
								Si eres una persona o compañia que quiera unirse a la causa, patrocinar, donar o
								trabajar con nosotrxs de alguna manera:{' '}
								<a href="mailto:infobedroomradio@gmail.com" className="text-blue-400">
									infobedroomradio@gmail.com
								</a>
							</div>
						</div>
					</Modal>
					<TopMenu toggleModalInfo={toggleModalInfo} showInterface={showInterface} />
					{/* <TitlePlaylist playlist={playlist} /> */}
					<div className="fixed z-30 flex justify-center w-full mt-6 ml-0 text-lg text-center text-white sm:ml-10 md:ml-0 sm:justify-start md:justify-center font-krona">
						<Logo2 width={120} />
					</div>
					<SongInfo song={song} showInterface={showInterface} />
					<SocialLinks song={song} showInterface={showInterface} />
				</div>
				<YoutubePlayer
					nextSong={nextSong}
					prevSong={prevSong}
					song={song}
					showPlayer={showPlayer}
					setLoadingStatus={setLoadingPlayer}
					showInterface={showInterface}
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
