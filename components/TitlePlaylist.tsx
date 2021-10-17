import { Playlist } from '@models/Playlist';
import { IoIosMenu } from 'react-icons/io';

interface TitlePlaylistProps {
	playlist: Playlist;
}

const TitlePlaylist = ({ playlist }: TitlePlaylistProps) => {
	return (
		<div className="fixed z-40 flex items-center gap-2 mt-6 ml-10 hover:cursor-pointer">
			<IoIosMenu color="white" size={20} className="mb-0.5" />
			<div className="text-lg text-white font-krona">{playlist.nombre}</div>
		</div>
	);
};

export default TitlePlaylist;
