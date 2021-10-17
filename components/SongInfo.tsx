import { Cancion } from '@models/Cancion';

interface SongInfoProps {
	song: Cancion;
	showInterface: boolean;
}

const SongInfo = ({ song, showInterface }: SongInfoProps) => {
	return (
		<div
			className={`fixed z-30 flex flex-col justify-center h-full gap-4 mx-6 sm:mx-10 transition-opacity duration-1000 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<h1 className="text-5xl tracking-tighter text-white sm:text-8xl font-krona">{song.nombre}</h1>
			<div className="flex">
				<div className="text-2xl tracking-tight text-blue-400 uppercase sm:text-3xl font-krona">
					{song.artistas.map((art, index) => {
						return (
							<div key={index}>
								<h2 className="hover:cursor-pointer menu-link blue" key={art._id}>
									{art.nombre}
								</h2>
								{index !== song.artistas.length - 1 && ' & '}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SongInfo;
