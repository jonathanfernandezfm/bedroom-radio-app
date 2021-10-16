import { Cancion } from '@models/Cancion';
import React from 'react';

interface SongInfoProps {
	song: Cancion;
}

const SongInfo = ({ song }: SongInfoProps) => {
	return (
		<div className="fixed z-30 flex flex-col justify-center h-full gap-4 mx-10">
			<div className="tracking-tighter text-white text-8xl font-krona">{song.nombre}</div>
			<div className="flex">
				<div className="text-3xl tracking-tight text-blue-400 uppercase font-krona">
					{song.artistas.map((art, index) => {
						return (
							<>
								<span className="hover:cursor-pointer menu-link blue" key={art._id}>
									{art.nombre}
								</span>
								{index !== song.artistas.length - 1 && <span> & </span>}
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SongInfo;
