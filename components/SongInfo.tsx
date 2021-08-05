import React from 'react';

interface SongInfoProps {
	title: string;
	artist: string;
}

const SongInfo = ({ title, artist }: SongInfoProps) => {
	return (
		<div className="fixed z-40 flex flex-col justify-center h-full gap-4 ml-10">
			<div className="tracking-tighter text-white text-8xl font-krona">{title}</div>
			<div className="text-3xl tracking-tight text-blue-400 font-krona">{artist}</div>
		</div>
	);
};

export default SongInfo;
