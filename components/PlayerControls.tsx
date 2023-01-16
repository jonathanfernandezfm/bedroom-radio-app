import { ArrowRepeat, ArrowShuffle, ChevronLeft, ChevronRight, Pause, Play } from 'akar-icons';
import { IoPauseOutline, IoPlaySharp } from 'react-icons/io5';

interface PlayerControlsProps {
	onPlayPause: () => void;
	onPrevVideo: () => void;
	onNextVideo: () => void;
	onRepeat: () => void;
	onShuffle: () => void;
	onVolumeChange: (value: string) => void;
	volume: string;
	playerState: number;
	showInterface: boolean;
	repeat: boolean;
	shuffle: boolean;
}

const PlayerControls = ({
	onPlayPause,
	onNextVideo,
	onPrevVideo,
	onRepeat,
	onShuffle,
	onVolumeChange,
	playerState,
	showInterface,
	volume,
	repeat,
	shuffle,
}: PlayerControlsProps) => {
	return (
		<div
			className={`fixed z-30 w-full mb-2 text-white sm:mb-0 sm:bottom-7 bottom-16 transition-opacity duration-1000 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="flex items-center justify-center gap-5">
				<button
					className={repeat ? 'text-blue-400' : 'hover:text-blue-400'}
					onClick={onRepeat}
					aria-label="Canción anterior"
				>
					<ArrowRepeat strokeWidth={2} size={16} />
				</button>
				<button className="hover:text-blue-400" onClick={onPrevVideo} aria-label="Canción anterior">
					<svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<button onClick={onPlayPause} className="flex" aria-label="Play pause">
					{playerState === 2 && <IoPlaySharp size={30} fill="white" />}
					{playerState === 1 && <IoPauseOutline size={30} fill="white" />}
					{playerState !== 1 && playerState !== 2 && <IoPauseOutline size={30} fill="white" />}
				</button>
				<button className="hover:text-blue-400" onClick={onNextVideo} aria-label="Siguiente cancion">
					<svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<button
					className={shuffle ? 'text-blue-400' : 'hover:text-blue-400'}
					onClick={onShuffle}
					aria-label="Siguiente cancion"
				>
					<ArrowShuffle strokeWidth={2} size={16} />
				</button>
			</div>
			<div className="flex items-center justify-center gap-3 mt-4 mr-2">
				<label htmlFor="volume-input" className="hidden">
					Volume
				</label>
				<input
					id="volume-input"
					type="range"
					min="0"
					max="100"
					value={volume}
					className="w-48 ml-2"
					onChange={(e) => {
						onVolumeChange(e.target.value);
					}}
					style={{
						backgroundSize: `${volume}% 100%`,
					}}
				/>
			</div>
		</div>
	);
};

export default PlayerControls;
