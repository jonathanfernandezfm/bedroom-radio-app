import React from 'react';

interface ModalProps {
	children: React.ReactNode;
	toggleModalInfo: (value: boolean) => void;
	visible: boolean;
}

const Modal = ({ children, toggleModalInfo, visible }: ModalProps) => {
	if (!visible) return null;

	return (
		<div className="fixed z-40 flex items-center justify-center w-full h-screen">
			<div
				className="absolute top-0 left-0 w-full h-screen bg-black opacity-0"
				onClick={() => {
					toggleModalInfo(false);
				}}
			></div>
			<div className="absolute max-w-md p-12 px-12 mx-4 text-white transform bg-black sm:p-12 sm:px-20 sm:mx-0 pointer-events transfrom animate-modal">
				{children}
			</div>
		</div>
	);
};

export default Modal;
