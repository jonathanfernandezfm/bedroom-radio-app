import React from 'react';
import Image from 'next/image';

interface SocialLinksProps {
	link_youtube: string;
	link_spotify: string;
}

export const SocialLinks = ({ link_youtube, link_spotify }: SocialLinksProps) => {
	return (
		<div className="fixed z-40 flex gap-6 bottom-6 right-6">
			<a href={link_youtube} target="_blank" rel="noreferrer">
				<Image src="/youtube.svg" alt="youtube link button" width="30" height="30" />
			</a>
			<a href={link_spotify} target="_blank" rel="noreferrer">
				<Image src="/spotify.svg" alt="spotify link button" width="30" height="30" />
			</a>
		</div>
	);
};
