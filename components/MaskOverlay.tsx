const MaskOverlay = () => {
	return (
		<>
			<div
				style={{ backgroundImage: 'url("./noise.gif")' }}
				className="absolute top-0 left-0 z-20 w-full h-screen bg-center opacity-8"
			></div>
			<div className="absolute top-0 left-0 z-20 w-full h-screen bg-black opacity-25"></div>
		</>
	);
};

export default MaskOverlay;
