import React, { useState } from 'react';
import Image from 'next/image';
interface PlayerControlsProps {
	onPlayPause: () => void;
	onPrevVideo: () => void;
	onNextVideo: () => void;
	onVolumeChange: (value: string) => void;
	playerState: number;
}

const PlayerControls = ({
	onPlayPause,
	onNextVideo,
	onPrevVideo,
	onVolumeChange,
	playerState,
}: PlayerControlsProps) => {
	const [volume, setVolume] = useState('50');
	return (
		<div className="fixed z-30 w-full text-white bottom-7">
			<div className="flex items-center justify-center gap-10 ">
				<button className="hover:text-blue-400" onClick={onPrevVideo}>
					PREV
				</button>
				<button onClick={onPlayPause} className="flex">
					{playerState === 2 && <Image src="/play.svg" alt="play button" width="25" height="25" />}
					{playerState === 1 && <Image src="/pause.svg" alt="play button" width="25" height="25" />}
					{playerState !== 1 && playerState !== 2 && (
						<Image src="/play.svg" alt="play button" width="25" height="25" />
					)}
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
						setVolume(e.target.value);
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
