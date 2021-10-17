import { IoPauseOutline, IoPlay } from 'react-icons/io5';

interface PlayerControlsProps {
	onPlayPause: () => void;
	onPrevVideo: () => void;
	onNextVideo: () => void;
	onVolumeChange: (value: string) => void;
	volume: string;
	playerState: number;
	showInterface: boolean;
}

const PlayerControls = ({
	onPlayPause,
	onNextVideo,
	onPrevVideo,
	onVolumeChange,
	playerState,
	showInterface,
	volume,
}: PlayerControlsProps) => {
	return (
		<div
			className={`fixed z-30 w-full mb-2 text-white sm:mb-0 sm:bottom-7 bottom-16 transition-opacity duration-1000 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="flex items-center justify-center gap-10 ">
				<button className="hover:text-blue-400" onClick={onPrevVideo}>
					PREV
				</button>
				<button onClick={onPlayPause} className="flex">
					{playerState === 2 && <IoPlay size={30} fill="white" />}
					{playerState === 1 && <IoPauseOutline size={30} fill="white" />}
					{playerState !== 1 && playerState !== 2 && <IoPauseOutline size={30} fill="white" />}
				</button>
				<button className="hover:text-blue-400" onClick={onNextVideo}>
					NEXT
				</button>
			</div>
			<div className="flex items-center justify-center gap-3 mt-4 mr-2">
				<input
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
