import React from 'react';

interface TitlePlaylistProps {
	name: string;
}

const TitlePlaylist = ({ name }: TitlePlaylistProps) => {
	return <div className="fixed z-40 w-full mt-6 text-lg text-center text-white font-krona">{name}</div>;
};

export default TitlePlaylist;
