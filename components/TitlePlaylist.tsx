import { Playlist } from '@models/Playlist';
import { Dispatch, SetStateAction } from 'react';
import { RiPlayList2Fill } from 'react-icons/ri';

interface TitlePlaylistProps {
	playlist: Playlist;
	showInterface: boolean;
	toggleShowPlaylists: Dispatch<SetStateAction<boolean>>;
}

const TitlePlaylist = ({ playlist, toggleShowPlaylists, showInterface }: TitlePlaylistProps) => {
	return (
		<div
			className={`fixed z-40 flex gap-3 items-center top-8 hover:cursor-pointer transition-opacity sm:top-8 duration-1000 left-6 sm:left-10 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={() => {
				toggleShowPlaylists(true);
			}}
		>
			<RiPlayList2Fill color="white" size={24} />
			<div className="hidden mb-0.5 text-lg text-white sm:block">{playlist.nombre}</div>
		</div>
	);
};

export default TitlePlaylist;
