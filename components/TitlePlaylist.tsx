import { Playlist } from '@models/Playlist';
import { Dispatch, SetStateAction } from 'react';
import { IoStatsChartSharp } from 'react-icons/io5';

interface TitlePlaylistProps {
	playlist: Playlist;
	showInterface: boolean;
	toggleShowPlaylists: Dispatch<SetStateAction<boolean>>;
}

const TitlePlaylist = ({ playlist, toggleShowPlaylists, showInterface }: TitlePlaylistProps) => {
	return (
		<div
			className={`fixed z-40 flex items-center top-8 gap-2 hover:cursor-pointer transition-opacity sm:top-8 duration-1000 left-6 sm:left-10 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={() => {
				toggleShowPlaylists(true);
			}}
		>
			<IoStatsChartSharp color="white" size={24} className="mb-0.5" />
			<div className="hidden mt-1 text-lg text-white font-krona sm:block">{playlist.nombre}</div>
		</div>
	);
};

export default TitlePlaylist;
