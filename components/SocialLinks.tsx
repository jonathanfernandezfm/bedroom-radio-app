import Image from 'next/image';
import { Cancion } from '@models/Cancion';
import { IoShareSocial } from 'react-icons/io5';

interface SocialLinksProps {
	song: Cancion;
	showInterface: boolean;
}

export const SocialLinks = ({ song, showInterface }: SocialLinksProps) => {
	const getTwitterShareURL = () => {
		let url = `https://twitter.com/intent/tweet?text=🎶He%20descubierto%20${encodeURIComponent(
			song.nombre
		)}%20de%20`;

		url += song.artistas
			.map((art) => (art.url_twitter ? `%40${art.url_twitter.split('/').pop()}` : encodeURIComponent(art.nombre)))
			.join('%20%26%20');

		url += `%20a%20trav%C3%A9s%20de%20bedroomradio.es%0A%0A${song.url_youtube}`;

		return url;
	};

	return (
		<div
			className={`fixed z-40 flex justify-center w-full gap-6 bottom-6 sm:right-6 sm:w-auto transition-opacity duration-1000 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
		>
			{/* <button className="flex transition-transform hover:scale-110">
				<CgHeart size={30} color="white" />
			</button> */}

			<a
				href={getTwitterShareURL()}
				target="_blank"
				className="flex transition-transform hover:scale-110 hover:-rotate-12"
				rel="noreferrer"
			>
				<IoShareSocial size={30} color="white" />
			</a>
			<a
				href={song.url_youtube}
				target="_blank"
				rel="noreferrer"
				aria-label="Siguiente cancion"
				className="flex transition-transform hover:-rotate-12 hover:scale-105"
			>
				<Image src="/youtube.svg" alt={`Youtube link a la canción ${song.nombre}`} width="30" height="30" />
			</a>
			<a
				href={song.url_spotify}
				target="_blank"
				rel="noreferrer"
				className="flex transition-transform hover:rotate-12 hover:scale-105"
			>
				<Image src="/spotify.svg" alt={`Spotify link a la canción ${song.nombre}`} width="30" height="30" />
			</a>
			{/* <button className="flex transition-transform hover:-rotate-90 hover:scale-105">
				<PlusIcon width={30} height={30} color="white" />
			</button> */}
		</div>
	);
};
