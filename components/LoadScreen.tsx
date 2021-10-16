import React, { Dispatch, SetStateAction } from 'react';
import { Transition } from 'react-transition-group';
import Typist from 'react-typist';
import SelectionDraw from 'svg/selection-draw';
import Logo from '../svg/logo';
import Logo2 from '../svg/logo2';

interface LoadScreenProps {
	loadingStatus: boolean;
	showPlayer: boolean;
	setShowPlayer: Dispatch<SetStateAction<boolean>>;
}

const duration = 1500;

const transitionOpacity: any = {
	default: { transition: `opacity ${duration}ms ease-in`, opacity: 1 },
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

const LoadScreen: React.FC<LoadScreenProps> = ({ showPlayer, loadingStatus, setShowPlayer }: LoadScreenProps) => {
	return (
		<Transition in={!showPlayer} unmountOnExit timeout={duration}>
			{(state) => (
				<div
					className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen gap-10 overflow-hidden text-white bg-black"
					style={{
						...transitionOpacity.default,
						...transitionOpacity[state],
					}}
				>
					<div className="relative" style={{ ...transitionOpacity.default, ...transitionOpacity[state] }}>
						<Logo2 />
						{/* <SelectionDraw /> */}
					</div>
					<div className="relative" style={{ ...transitionOpacity.default, ...transitionOpacity[state] }}>
						<button
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
								<span className="">Entra y descubre</span>
							</Typist>
						</button>
					</div>
				</div>
			)}
		</Transition>
	);
};

export default LoadScreen;
