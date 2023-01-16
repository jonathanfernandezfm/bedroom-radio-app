import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Logo2 from '../svg/logo2';
import Wave from '@foobar404/wave';

const Guess = () => {
	const [wave, setWave] = useState(null);

	useEffect(() => {
		let wave = new Wave();
		wave.fromElement('audio', 'canvas', { type: 'dualbars', colors: ['white'] });
		setWave(wave);
	}, []);

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<audio id="audio" src={'/song.mp3'} className="absolute top-0 left-0" controls></audio>
			<div className="absolute top-0 z-30 flex justify-center self-start w-full mt-6 text-lg text-center text-white">
				<Logo2 width={120} />
			</div>
			<div className="w-[600px] h-[200px] -mt-6">
				<canvas id="canvas" width="600" height="200"></canvas>
			</div>
			<div className="w-full flex justify-center items-center mt-24">
				<div className="flex gap-10">
					<div className="relative w-[370px] h-[250px] bg-white ring-4 ring-white overflow-hidden shadow-md">
						<div
							className="w-full h-full bg-no-repeat bg-cover bg-center hover:cursor-pointer hover:scale-110 transition-transform"
							style={{ backgroundImage: 'url("https://i.ibb.co/gz95Qk5/massiaviu.png")' }}
						></div>
						<span className="absolute text-white font-bold font-michroma left-4 bottom-4 text-2xl">
							Title 1
						</span>
					</div>
					<div className="relative w-[370px] h-[250px] bg-white ring-4 ring-white overflow-hidden shadow-md">
						<div
							className="w-full h-full bg-no-repeat bg-cover bg-center hover:cursor-pointer hover:scale-110 transition-transform"
							style={{ backgroundImage: 'url("https://i.ibb.co/JCYjgw0/jordanab.png")' }}
						></div>
						<span className="absolute text-white font-bold font-michroma w-full text-center bottom-4 text-2xl">
							Title 2
						</span>
					</div>
					<div className="relative w-[370px] h-[250px] bg-white ring-4 ring-white overflow-hidden shadow-md">
						<div
							className="w-full h-full bg-no-repeat bg-cover bg-center hover:cursor-pointer hover:scale-110 transition-transform"
							style={{ backgroundImage: 'url("https://i.ibb.co/sgLhRJg/ralphiechoo.png")' }}
						></div>
						<span className="absolute text-white font-bold font-michroma right-4 bottom-4 text-2xl">
							Title 3
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Guess;
