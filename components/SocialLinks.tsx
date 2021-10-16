import React from 'react';
import Image from 'next/image';
import { Cancion } from '@models/Cancion';
import { PlusIcon } from '@radix-ui/react-icons';

interface SocialLinksProps {
	song: Cancion;
}

export const SocialLinks = ({ song }: SocialLinksProps) => {
	return (
		<div className="fixed z-40 flex justify-center w-full gap-6 bottom-6 sm:right-6 sm:w-auto">
			<a
				href={song.url_youtube}
				target="_blank"
				rel="noreferrer"
				className="flex transition-transform hover:-rotate-12 hover:scale-105"
			>
				<Image src="/youtube.svg" alt="youtube link button" width="30" height="30" />
			</a>
			<a
				href={song.url_spotify}
				target="_blank"
				rel="noreferrer"
				className="flex transition-transform hover:rotate-12 hover:scale-105"
			>
				<Image src="/spotify.svg" alt="spotify link button" width="30" height="30" />
			</a>
			<button className="flex transition-transform hover:-rotate-90 hover:scale-105">
				<PlusIcon width={30} height={30} color="white" />
			</button>
		</div>
	);
};
