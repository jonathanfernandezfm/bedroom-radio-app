import React from 'react';
import { Transition } from 'react-transition-group';
import { MdClose } from 'react-icons/md';

interface ModalProps {
	children: React.ReactNode;
	toggleModalInfo: (value: boolean) => void;
	visible: boolean;
}

const duration = 200;

const transitionStyles: any = {
	default: { transition: `transform ${duration}ms ease-in-out`, transform: 'scale(0)' },
	entering: { transform: 'scale(0)' },
	entered: { transform: 'scale(1)' },
	exiting: { transform: 'scale(0)' },
	exited: { transform: 'scale(0)' },
};

const Modal = ({ children, toggleModalInfo, visible }: ModalProps) => {
	return (
		<Transition
			in={visible}
			mountOnEnter
			unmountOnExit
			timeout={{
				appear: 0,
				enter: 0,
				exit: duration,
			}}
		>
			{(state) => (
				<div
					style={{ ...transitionStyles.default, ...transitionStyles[state] }}
					className="fixed z-50 flex items-center justify-center w-full h-screen"
				>
					{/* BACKDROP */}
					<div
						className="absolute top-0 left-0 w-full h-screen bg-black opacity-0"
						onClick={() => {
							toggleModalInfo(false);
						}}
					></div>

					{/* MODAL */}
					<div className="absolute max-w-md p-1 mx-6 text-white transform bg-transparent sm:p-2 ring-4 ring-white pointer-events transfrom">
						<button
							aria-label="Botón cerrar modal"
							className="absolute right-6 top-6 hover:scale-110"
							onClick={() => {
								toggleModalInfo(false);
							}}
						>
							<MdClose color="white" size={30} fill="white" />
						</button>
						<div className="p-6 px-12 bg-black sm:p-12 sm:px-14 sm:mx-0">{children}</div>
					</div>
				</div>
			)}
		</Transition>
	);
};

export default Modal;
