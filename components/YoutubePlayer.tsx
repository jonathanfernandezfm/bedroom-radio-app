import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import PlayerControls from './PlayerControls';

interface YoutubePlayerProps {
	setLoadingStatus: Dispatch<SetStateAction<boolean>>;
	showPlayer: boolean;
}

const opts: Options = {
	height: '360',
	width: '640',
	playerVars: {
		autoplay: 1,
		mute: 1,
		controls: 0,
		disablekb: 1,
		fs: 0,
		iv_load_policy: 3,
		modestbranding: 1,
		rel: 0,
		showinfo: 0,
		playsinline: 1,
	},
};

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ setLoadingStatus, showPlayer }: YoutubePlayerProps) => {
	const [player, setPlayer] = useState<any>(undefined);

	useEffect(() => {
		if (showPlayer && player) player.playVideo();

		return () => {};
	}, [showPlayer, player]);

	const onReady = (event: any) => {
		const player = event.target;

		setPlayer(player);
		setLoadingStatus(false);

		player.loadPlaylist({
			list: 'PLljYIhN5dniR8o1AOA-3sia5wl0UD0Vrr',
			listType: 'playlist',
			index: 0,
		});

		player.setVolume(50);
		player.setLoop(true);

		setTimeout(() => {
			player.unMute();
			player.pauseVideo();
			player.setShuffle(true);
		}, 500);
	};

	const onPlayPause = () => {
		if (player) {
			if (player.getPlayerState() === 1) player.pauseVideo();
			if (player.getPlayerState() === 2 || player.getPlayerState() === 5) player.playVideo();
		}
	};

	const onStateChange = (newState: any) => {
		console.log(newState);
	};

	const onNextVideo = () => {
		if (player) player.nextVideo();
	};

	const onPrevVideo = () => {
		if (player) player.previousVideo();
	};

	return (
		<div>
			<PlayerControls onPlayPause={onPlayPause} onPrevVideo={onPrevVideo} onNextVideo={onNextVideo} />
			<YouTube
				className={
					'2xl:scale-100 xl:scale-105 lg:scale-150 md:scale-200 scale-400 relative block w-full h-[300%]'
				}
				containerClassName={
					'fixed top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden opacity-1 flex items-center justify-center'
				}
				opts={opts}
				onReady={onReady}
				onStateChange={onStateChange} // defaults -> noop              // defaults -> noop
				// onPlay={func}                     // defaults -> noop
				// onPause={func}                    // defaults -> noop
				// onEnd={func}                      // defaults -> noop
				// onError={func}                    // defaults -> noop
				// onPlaybackRateChange={func}       // defaults -> noop
				// onPlaybackQualityChange={func}    // defaults -> noop
			/>
		</div>
	);
};

export default YoutubePlayer;

{
	/* <div className="relative z-0 w-screen h-screen overflow-hidden">
	<div className="h-[101%] box-content pb-[56.25%]">
		<YouTube
			videoId={'D8UNJDjygk0'}
			className={'absolute top-0 left-0 scale-150 block w-full h-full pointer-events-none'}
			containerClassName={'pb-[56.25%] h-[101%] h-full m-auto overflow-hidden w-full relative'}
			opts={opts}
			onReady={onReady}
			// onPlay={func}                     // defaults -> noop
			// onPause={func}                    // defaults -> noop
			// onEnd={func}                      // defaults -> noop
			// onError={func}                    // defaults -> noop
			onStateChange={onStateChange} // defaults -> noop              // defaults -> noop
			// onPlaybackRateChange={func}       // defaults -> noop
			// onPlaybackQualityChange={func}    // defaults -> noop
		/>
	</div>
</div> */
}
