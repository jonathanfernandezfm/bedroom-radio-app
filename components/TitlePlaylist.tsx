import { Playlist } from '@models/Playlist';
import React from 'react';

interface TitlePlaylistProps {
	playlist: Playlist;
}

const TitlePlaylist = ({ playlist }: TitlePlaylistProps) => {
	return <div className="fixed z-30 w-full mt-6 text-lg text-center text-white font-krona">{playlist.nombre}</div>;
};

export default TitlePlaylist;
