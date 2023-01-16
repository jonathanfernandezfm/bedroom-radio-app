import { Artista } from '@models/Artista';
import { Cancion } from '@models/Cancion';
import { Dispatch, SetStateAction } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { MdOutlineFiberNew } from 'react-icons/md';
import Typist from 'react-typist';
import { getArtista } from 'services/db_service';

interface SongInfoProps {
	song: Cancion;
	showInterface: boolean;
	toggleShowArtistInfo: Dispatch<SetStateAction<boolean>>;
	setSelectedArtist: Dispatch<SetStateAction<Artista | undefined>>;
}

const SongInfo = ({ song, showInterface, toggleShowArtistInfo, setSelectedArtist }: SongInfoProps) => {
	return (
		<div
			className={`fixed z-30 flex flex-col justify-center h-full gap-4 mx-6 sm:mx-10 transition-opacity duration-1000 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
		>
			{song.estreno && (
				<span className="flex items-center gap-1 -mb-2 font-bold text-blue-400">[[ NOVEDAD ]]</span>
			)}
			<h1 className="text-5xl tracking-tighter text-white lowercase sm:text-9xl font-anton">
				<Typist
					key={song.id}
					cursor={{
						show: true,
						blink: true,
						element: '|',
						hideWhenDone: true,
						hideWhenDoneDelay: 0,
					}}
					avgTypingDelay={140}
				>
					<span>{song.nombre}</span>
				</Typist>
			</h1>
			<div className="flex">
				<div className="text-2xl tracking-tight text-white uppercase sm:text-3xl font-michroma">
					{song.artistas.map((art, index) => {
						const artista = getArtista(art);
						return (
							<div key={index}>
								<h2
									className="hover:cursor-pointer menu-link blue"
									key={art}
									onClick={() => {
										toggleShowArtistInfo(true);
										setSelectedArtist(artista);
									}}
								>
									{artista.nombre}
								</h2>
								&emsp;{index !== song.artistas.length - 1 && ' & '}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SongInfo;
