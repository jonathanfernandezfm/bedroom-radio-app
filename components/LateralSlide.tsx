import { Cancion } from '@models/Cancion';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { SocialLinks } from './SocialLinks';
import { Artista } from '@models/Artista';
import { Transition } from 'react-transition-group';
import { MdClose } from 'react-icons/md';

interface LateralSlideProps {
	song: Cancion;
	show: boolean;
	toggleShowArtistInfo: Dispatch<SetStateAction<boolean>>;
	artist: Artista | undefined;
	setSelectedArtist: Dispatch<SetStateAction<Artista | undefined>>;
}

const duration = 200;

const transitionStyles: any = {
	default: { transition: `transform ${duration}ms ease-in-out`, transform: 'translateX(450px)' },
	entering: { transform: 'translateX(450px)' },
	entered: { transform: 'translateX(0)' },
	exiting: { transform: 'translateX(450px)' },
	exited: { transform: 'translateX(450px)' },
};

const transitionBackdrop: any = {
	default: { transition: `opacity ${duration}ms ease-in-out`, opacity: '0' },
	entering: { opacity: '0' },
	entered: { opacity: '0.5' },
	exiting: { opacity: '0' },
	exited: { opacity: '0' },
};

const LateralSlide = ({ song, show, toggleShowArtistInfo, artist, setSelectedArtist }: LateralSlideProps) => {
	return (
		<Transition
			in={show}
			mountOnEnter
			unmountOnExit
			timeout={{
				appear: 0,
				enter: 0,
				exit: duration,
			}}
		>
			{(state) => (
				<>
					<div
						style={{ ...transitionBackdrop.default, ...transitionBackdrop[state] }}
						className="absolute top-0 left-0 z-50 w-full h-screen bg-black"
						onClick={() => {
							toggleShowArtistInfo(false);
						}}
					></div>
					<div
						style={{ ...transitionStyles.default, ...transitionStyles[state] }}
						className="fixed right-0 z-50 w-full h-screen text-white bg-transparent md:pl-2 md:w-auto ring-4 ring-white"
					>
						<button
							aria-label="Botón cerrar modal"
							className="absolute left-6 top-6 hover:scale-110"
							onClick={() => {
								toggleShowArtistInfo(false);
							}}
						>
							<MdClose color="white" size={30} fill="white" />
						</button>
						<div className="w-full h-full py-16 pt-24 bg-black">
							<div className="flex justify-center md:block md:px-28">
								{artist?.url_imagen ? (
									<Image
										src={`${artist.url_imagen}`}
										alt={``}
										width="244"
										height="288"
										className="bg-gray-600"
									/>
								) : (
									<div className="w-[244px] bg-gray-600 h-[288px]"></div>
								)}
							</div>
							<div className="md:px-28">
								<h3 className="flex justify-center w-full mt-12 text-4xl text-center md:px-0 px-14 md:w-56 font-krona">
									{artist?.nombre}
								</h3>
								<div className="flex justify-center gap-4 mt-5">
									{artist?.url_youtube && (
										<a
											href={artist?.url_youtube}
											target="_blank"
											rel="noreferrer"
											aria-label="Siguiente cancion"
											className="flex transition-transform hover:-rotate-12 hover:scale-105"
										>
											<Image
												src="/youtube.svg"
												alt={`Youtube link al artista ${artist?.nombre}`}
												width="30"
												height="30"
											/>
										</a>
									)}
									{artist?.url_spotify && (
										<a
											href={artist?.url_spotify}
											target="_blank"
											rel="noreferrer"
											className="flex transition-transform hover:rotate-12 hover:scale-105"
										>
											<Image
												src="/spotify.svg"
												alt={`Spotify link al artista ${artist?.nombre}`}
												width="30"
												height="30"
											/>
										</a>
									)}
									{artist?.url_instagram && (
										<a
											href={artist?.url_instagram}
											target="_blank"
											rel="noreferrer"
											className="flex transition-transform hover:-rotate-12 hover:scale-105"
										>
											<Image
												src="/instagram.svg"
												alt={`Instagram link al artista ${artist?.nombre}`}
												width="30"
												height="30"
											/>
										</a>
									)}
									{artist?.url_twitter && (
										<a
											href={artist?.url_twitter}
											target="_blank"
											rel="noreferrer"
											className="flex transition-transform hover:-rotate-12 hover:scale-105"
										>
											<Image
												src="/twitter.svg"
												alt={`Twitter link al artista ${artist?.nombre}`}
												width="30"
												height="30"
											/>
										</a>
									)}
								</div>
							</div>
							{/* <p className="m-auto mt-10 text-justify w-80">{artist?.biografia}</p> */}
							<p className="m-auto mt-10 text-justify w-80">{artist?.biografia}</p>
							<div className="absolute flex justify-center w-full bottom-10">
								{song.artistas.map((art) => (
									<button
										className={`p-4 text-blue-400 uppercase font-krona ${
											artist?.nombre === art.nombre ? 'underline' : ''
										}`}
										key={art.id}
										onClick={() => {
											setSelectedArtist(art);
										}}
									>
										{art.nombre}
									</button>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</Transition>
	);
};

export default LateralSlide;
