import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { Playlist } from '@models/Playlist';
import MaskOverlay from '@components/MaskOverlay';
import PlayerControls from '@components/PlayerControls';
import { Cancion } from '@models/Cancion';

interface YoutubePlayerProps {
	setLoadingStatus: Dispatch<SetStateAction<boolean>>;
	showPlayer: boolean;
	song?: Cancion;
	nextSong: () => void;
	prevSong: () => void;
	showInterface: boolean;
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

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
	setLoadingStatus,
	showPlayer,
	song,
	nextSong,
	prevSong,
	showInterface,
}: YoutubePlayerProps) => {
	const [player, setPlayer] = useState<any>(undefined);
	const [playerState, setPlayerState] = useState(-1);

	useEffect(() => {
		if (showPlayer && player) player.playVideo();

		return () => {};
	}, [showPlayer, player, song]);

	useEffect(() => {
		if (!song || !player) return;
		player.loadVideoById({
			videoId: song?.id_youtube,
		});
	}, [player, song]);

	const onReady = (event: any) => {
		const player = event.target;

		setPlayer(player);
		setLoadingStatus(false);

		player.loadVideoById({
			videoId: song?.id_youtube,
		});

		player.setVolume(25);

		setTimeout(() => {
			player.unMute();
			player.pauseVideo();
		}, 500);
	};

	const onPlayPause = () => {
		if (player) {
			if (player.getPlayerState() === 1) player.pauseVideo();
			if (player.getPlayerState() === 2 || player.getPlayerState() === 5) player.playVideo();
		}
	};

	const onStateChange = (newState: any) => {
		setPlayerState(player.getPlayerState());
	};

	const onVolumeChange = (value: string) => {
		if (player) player.setVolume(value);
	};

	return (
		<div>
			<MaskOverlay />
			<PlayerControls
				onPlayPause={onPlayPause}
				onPrevVideo={prevSong}
				onNextVideo={nextSong}
				onVolumeChange={onVolumeChange}
				playerState={playerState}
				showInterface={showInterface}
			/>
			<YouTube
				videoId={''}
				className={
					'2xl:scale-100 xl:scale-105 lg:scale-150 md:scale-200 scale-400 relative block w-full h-[300%]'
				}
				containerClassName={
					'fixed top-0 left-0 right-0 bottom-0 z-10 pointer-events-none overflow-hidden opacity-1 flex items-center justify-center'
				}
				opts={opts}
				onReady={onReady}
				onStateChange={onStateChange} // defaults -> noop              // defaults -> noop
				// onPlay={func}                     // defaults -> noop
				// onPause={func}                    // defaults -> noop
				onEnd={nextSong}
				onError={(e) => {
					console.log(e);
				}} // defaults -> noop
				// onPlaybackRateChange={func}       // defaults -> noop
				// onPlaybackQualityChange={func}    // defaults -> noop
			/>
		</div>
	);
};

export default YoutubePlayer;
