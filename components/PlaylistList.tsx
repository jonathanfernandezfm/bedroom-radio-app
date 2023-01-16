import { Playlist } from '@models/Playlist';
import React, { useState } from 'react';

interface PlaylistListProps {
	playlists: Playlist[];
	selectedPlaylist: number;
	selectPlaylist: (value: number) => void;
}

const PlaylistList = ({ playlists, selectedPlaylist, selectPlaylist }: PlaylistListProps) => {
	const [hovered, setHovered] = useState(-1);

	return (
		<div className="w-full h-full py-16 pt-24 bg-black">
			<div className="flex flex-col gap-10 px-10">
				{playlists.map((p, index) => (
					<div
						key={p.id}
						className={`relative px-4 bg-gray-600 bg-center bg-cover cursor-pointer py-14 md:w-80 w-full ${
							selectedPlaylist === index ? 'ring-2 ring-white ring-offset-4 ring-offset-black' : ''
						}`}
						onMouseEnter={() => {
							setHovered(index);
						}}
						onMouseLeave={() => {
							setHovered(-1);
						}}
						onClick={() => {
							selectPlaylist(index);
						}}
						style={{
							backgroundImage: `url("${p.url_imagen}")`,
						}}
					>
						<div
							style={{
								backgroundImage:
									hovered === index || selectedPlaylist === index ? 'url("./noise2.gif")' : '',
							}}
							className="absolute top-0 left-0 z-20 w-full h-full bg-center opacity-8"
						></div>
						<h3 className="flex justify-center text-xl text-center font-anton">{p.nombre}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlaylistList;
