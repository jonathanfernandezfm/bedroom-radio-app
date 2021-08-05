import React from 'react';

const MaskOverlay = () => {
	return (
		<div>
			<div
				style={{ backgroundImage: 'url("./effect-2.gif")' }}
				className="absolute top-0 left-0 z-20 w-full h-screen bg-center bg-no-repeat bg-cover opacity-10"
			></div>
			<div className="absolute top-0 left-0 z-20 w-full h-screen bg-black opacity-40"></div>
		</div>
	);
};

export default MaskOverlay;
