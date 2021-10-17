import React from 'react';
import { MdClose } from 'react-icons/md';

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
			<div className="absolute max-w-md p-1 mx-6 text-white transform bg-transparent sm:p-2 ring-4 ring-white pointer-events transfrom animate-modal">
				<button
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
	);
};

export default Modal;
