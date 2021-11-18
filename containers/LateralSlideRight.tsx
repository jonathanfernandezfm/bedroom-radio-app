import React, { Dispatch, SetStateAction } from 'react';
import { Transition } from 'react-transition-group';
import { MdClose } from 'react-icons/md';

interface LateralSlideProps {
	show: boolean;
	toggleLateralSlideRight: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode;
}

const duration = 200;

const transitionStyles: any = {
	default: { transition: `transform ${duration}ms ease-in-out`, transform: 'translateX(450px)' },
	entering: { transform: 'translateX(450px)' },
	entered: { transform: 'translateX(0)' },
	exiting: { transform: 'translateX(450px)' },
	exited: { transform: 'translateX(450px)' },
};

const transitionBackdrop: any = {
	default: { transition: `opacity ${duration}ms ease-in-out`, opacity: '0' },
	entering: { opacity: '0' },
	entered: { opacity: '0.5' },
	exiting: { opacity: '0' },
	exited: { opacity: '0' },
};

const LateralSlide = ({ show, toggleLateralSlideRight, children }: LateralSlideProps) => {
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
							toggleLateralSlideRight(false);
						}}
					></div>
					<div
						style={{ ...transitionStyles.default, ...transitionStyles[state] }}
						className="fixed right-0 z-50 w-full h-screen text-white bg-transparent md:pl-1 md:w-auto ring-4 ring-white"
					>
						<button
							aria-label="Botón cerrar modal"
							className="absolute left-6 top-6 hover:scale-110"
							onClick={() => {
								toggleLateralSlideRight(false);
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

export default LateralSlide;
