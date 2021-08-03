import React from 'react';

interface PlayerControlsProps {
	onPlayPause: () => void;
	onPrevVideo: () => void;
	onNextVideo: () => void;
}

const PlayerControls = ({ onPlayPause, onNextVideo, onPrevVideo }: PlayerControlsProps) => {
	return (
		<div className="absolute z-10 text-white bottom-7 left-5">
			<button className="mr-10" onClick={onPrevVideo}>
				PREV
			</button>
			<button onClick={onPlayPause}>PLAY PAUSE</button>
			<button className="ml-10" onClick={onNextVideo}>
				NEXT
			</button>
		</div>
	);
};

export default PlayerControls;
