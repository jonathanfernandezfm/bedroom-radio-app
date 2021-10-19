import Image from 'next/image';
import { Cancion } from '@models/Cancion';
import { CgHeart } from 'react-icons/cg';

interface SocialLinksProps {
	song: Cancion;
	showInterface: boolean;
}

export const SocialLinks = ({ song, showInterface }: SocialLinksProps) => {
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
