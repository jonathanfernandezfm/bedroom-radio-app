import { Cancion } from '@models/Cancion';
import React from 'react';

interface SongInfoProps {
	song: Cancion;
}

const SongInfo = ({ song }: SongInfoProps) => {
	console.log(song);
	return (
		<div className="fixed z-30 flex flex-col justify-center h-full gap-4 mx-10">
			<div className="tracking-tighter text-white text-8xl font-krona">{song.nombre}</div>
			<div className="flex">
				<div className="text-3xl tracking-tight text-blue-400 transition-transform font-krona hover:translate-x-2 hover:cursor-pointer">
					{song.artistas.map((art) => {
						return art.nombre;
					})}
				</div>
			</div>
		</div>
	);
};

export default SongInfo;
