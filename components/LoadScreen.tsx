import React, { Dispatch, SetStateAction } from 'react';
import Typist from 'react-typist';
import Logo2 from '../svg/logo2';

interface LoadScreenProps {
	loadingStatus: boolean;
	showPlayer: boolean;
	setShowPlayer: Dispatch<SetStateAction<boolean>>;
}

const LoadScreen: React.FC<LoadScreenProps> = ({ showPlayer, loadingStatus, setShowPlayer }: LoadScreenProps) => {
	return (
		<>
			<div className={`${showPlayer ? 'hidden' : ''} absolute w-full h-screen bg-black z-50`}></div>

			<div
				className={`${
					showPlayer ? 'hide' : ''
				} absolute load-screen top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen gap-10 overflow-hidden text-white bg-black `}
			>
				<button
					className="relative"
					aria-label="Entra y descubre"
					onClick={() => {
						if (!loadingStatus) setShowPlayer(true);
					}}
				>
					<Logo2 />
				</button>
				<div className="relative">
					<button
						aria-label="Entra y descubre"
						onClick={() => {
							if (!loadingStatus) setShowPlayer(true);
						}}
						className={`relative z-10 px-8 py-3 text-xl bg-black transition-transform hover:translate-x-2 hover:cursor-pointer`}
					>
						<Typist
							cursor={{
								show: true,
								blink: true,
								element: '|',
								hideWhenDone: true,
								hideWhenDoneDelay: 0,
							}}
						>
							<span>
								Entra y descubre <span>➜</span>
							</span>
						</Typist>
					</button>
				</div>
			</div>
		</>
	);
};

export default LoadScreen;
