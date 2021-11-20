import { Dispatch, SetStateAction, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { MdClose } from 'react-icons/md';

interface LateralSlideProps {
	show: boolean;
	toggleLateralSlideLeft: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode;
}

const duration = 200;

const transitionStyles: any = {
	default: { transition: `transform ${duration}ms ease-in-out`, transform: 'translateX(-450px)' },
	entering: { transform: 'translateX(-450px)' },
	entered: { transform: 'translateX(0)' },
	exiting: { transform: 'translateX(-450px)' },
	exited: { transform: 'translateX(-450px)' },
};

const transitionBackdrop: any = {
	default: { transition: `opacity ${duration}ms ease-in-out`, opacity: '0' },
	entering: { opacity: '0' },
	entered: { opacity: '0.5' },
	exiting: { opacity: '0' },
	exited: { opacity: '0' },
};

const LateralSlideLeft = ({ show, toggleLateralSlideLeft, children }: LateralSlideProps) => {
	useEffect(() => {
		window.addEventListener('keyup', onKeyPress);

		return () => {
			window.removeEventListener('keyup', onKeyPress);
		};
	});

	const onKeyPress = (e: any) => {
		switch (e.code) {
			case 'Escape':
				toggleLateralSlideLeft(false);
				break;
		}
	};

	return (
		<Transition
			in={show}
			mountOnEnter
			unmountOnExit
			timeout={{
				appear: 0,
				enter: 0,
				exit: duration,
			}}
		>
			{(state) => (
				<>
					<div
						style={{ ...transitionBackdrop.default, ...transitionBackdrop[state] }}
						className="absolute top-0 left-0 z-50 w-full h-screen bg-black"
						onClick={() => {
							toggleLateralSlideLeft(false);
						}}
					></div>
					<div
						style={{ ...transitionStyles.default, ...transitionStyles[state] }}
						className="fixed left-0 z-50 w-full h-screen text-white bg-transparent md:w-auto md:pr-1 ring-4 ring-white"
					>
						<button
							aria-label="Botón cerrar modal"
							className="absolute right-6 top-6 hover:scale-110"
							onClick={() => {
								toggleLateralSlideLeft(false);
							}}
						>
							<MdClose color="white" size={30} fill="white" />
						</button>
						{children}
					</div>
				</>
			)}
		</Transition>
	);
};

export default LateralSlideLeft;
