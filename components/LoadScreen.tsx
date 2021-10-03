import React, { Dispatch, SetStateAction } from 'react';
import { Transition } from 'react-transition-group';
import Typist from 'react-typist';

interface LoadScreenProps {
	loadingStatus: boolean;
	showPlayer: boolean;
	setShowPlayer: Dispatch<SetStateAction<boolean>>;
}

const duration = 4000;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in`,
	opacity: 1,
	transform: 'scale(1)',
};

const transitionOpacity: any = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

const transitionButton: any = {
	default: { transition: 'opacity 200ms ease-in-out' },
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

const transitionZoom: any = {
	default: { transition: 'all 1000ms ease-in-out, opacity 500ms ease-in-out' },
	entering: { transform: 'scale(1)', opacity: 1 },
	entered: { transform: 'scale(1)', opacity: 1 },
	exiting: { transform: 'scale(20, 26)', opacity: 0 },
	exited: { transform: 'scale(20, 26)', opacity: 0 },
};

const transitionButtonBack: any = {
	default: { transition: 'left 500ms ease-in-out, top 200ms ease-in-out' },
	entering: { top: '-0.5rem', left: '-0.5rem', pointerEvents: 'all' },
	entered: { top: '-0.5rem', left: '-0.5rem', pointerEvents: 'all' },
	exiting: { top: '0rem', left: '0rem', pointerEvents: 'none' },
	exited: { top: '0rem', left: '0rem', pointerEvents: 'none' },
};

const LoadScreen: React.FC<LoadScreenProps> = ({ showPlayer, loadingStatus, setShowPlayer }: LoadScreenProps) => {
	return (
		<Transition in={!showPlayer} unmountOnExit timeout={duration}>
			{(state) => (
				<div
					className="absolute top-0 left-0 z-50 grid items-center justify-center w-full h-screen overflow-hidden text-white bg-black"
					style={{
						...defaultStyle,
						...transitionOpacity[state],
					}}
				>
					<div className="relative" style={{ ...transitionZoom.default, ...transitionZoom[state] }}>
						<button
							onClick={() => {
								if (!loadingStatus) setShowPlayer(true);
							}}
							className={`relative z-10 px-8 py-3 text-xl bg-black border-2 border-white`}
							style={{
								...transitionButtonBack.default,
								...transitionButtonBack[state],
							}}
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
								Entra y descubre
							</Typist>
						</button>
					</div>
				</div>
			)}
		</Transition>
	);
};

export default LoadScreen;
