import React from 'react';

const MaskOverlay = () => {
	return (
		<div>
			<div
				style={{ backgroundImage: 'url("./noise.gif")' }}
				className="absolute top-0 left-0 z-20 w-full h-screen bg-center opacity-14"
			></div>
			<div className="absolute top-0 left-0 z-20 w-full h-screen bg-black opacity-40"></div>
		</div>
	);
};

export default MaskOverlay;
