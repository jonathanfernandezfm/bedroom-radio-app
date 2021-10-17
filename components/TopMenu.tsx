import React, { useEffect, useMemo, useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import debounce from 'lodash.debounce';

interface TopMenuProps {
	toggleModalInfo: (value?: boolean) => void;
	showInterface: boolean;
}

const TopMenu = ({ toggleModalInfo, showInterface }: TopMenuProps) => {
	const [menuOpen, toggleMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const debouncedChangeHandler = useMemo(() => debounce(handleWindowSizeChange, 300), []);

	function handleWindowSizeChange() {
		if (window.innerWidth < 640 && !isMobile) setIsMobile(true);
		else setIsMobile(false);
	}

	useEffect(() => {
		debouncedChangeHandler();
		window.addEventListener('resize', debouncedChangeHandler);
		return () => {
			window.removeEventListener('resize', debouncedChangeHandler);
		};
	}, []);

	const toggleMenu = () => {
		toggleMenuOpen(!menuOpen);
	};

	return (
		<div
			className={`fixed z-40 top-8 right-6 transition-opacity duration-1000 ${
				showInterface ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<button
				className="sm:hidden"
				onClick={() => {
					toggleModalInfo(false);
					toggleMenu();
				}}
			>
				<HamburgerMenuIcon
					color="white"
					width={30}
					height={30}
					className={`absolute ${menuOpen ? 'animate-fade-out' : 'animate-fade-in'}`}
				/>
				<Cross1Icon
					color="white"
					width={30}
					height={30}
					className={`${menuOpen ? 'animate-fade-in' : 'animate-fade-out'}`}
				/>
			</button>
			{!isMobile || (isMobile && menuOpen) ? (
				<ul className="fixed flex flex-col gap-4 mt-6 text-lg text-right text-white sm:top-0 sm:text-center top-16 right-6 sm:gap-8 sm:flex-row sm:right-10">
					<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
						<button
							className="menu-link"
							onClick={() => {
								toggleModalInfo(true);
								toggleMenu();
							}}
						>
							Sobre nosotros
						</button>
					</li>
					<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
						<a className="menu-link">Contacto</a>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default TopMenu;
