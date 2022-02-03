import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { IoMenu, IoClose } from 'react-icons/io5';

interface TopMenuProps {
	toggleModalInfo: (value?: boolean) => void;
	showInterface: boolean;
}

const TopMenu = ({ toggleModalInfo, showInterface }: TopMenuProps) => {
	const [menuOpen, toggleMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleWindowSizeChange = () => {
		if (window.innerWidth < 1200 && !isMobile) setIsMobile(true);
		else setIsMobile(false);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedChangeHandler = useMemo(() => debounce(handleWindowSizeChange, 300), []);

	useEffect(() => {
		debouncedChangeHandler();
		window.addEventListener('resize', debouncedChangeHandler);
		return () => {
			window.removeEventListener('resize', debouncedChangeHandler);
		};
	}, [debouncedChangeHandler]);

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
				className="lg:hidden"
				onClick={() => {
					toggleModalInfo(false);
					toggleMenu();
				}}
				aria-label="Menu hamburguesa"
			>
				<IoMenu
					color="white"
					size={30}
					className={`absolute ${menuOpen ? 'animate-fade-out' : 'animate-fade-in'}`}
				/>
				<IoClose color="white" size={30} className={`${menuOpen ? 'animate-fade-in' : 'animate-fade-out'}`} />
			</button>
			{!isMobile || (isMobile && menuOpen) ? (
				<ul className="fixed flex flex-col gap-4 mt-6 text-lg text-right text-white lg:top-0 lg:text-center top-16 right-6 lg:gap-8 lg:flex-row lg:right-10">
					<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
						<button
							className="menu-link"
							onClick={() => {
								toggleModalInfo(true);
								toggleMenu();
							}}
							aria-label="Sobre nosotros"
						>
							Sobre nosotros
						</button>
					</li>
					<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
						<a
							href="mailto:infobedroomradio@gmail.com"
							className="menu-link"
							title="Escribe un email a bedroom radio"
						>
							Contacto
						</a>
					</li>
					<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
						<a
							href="https://forms.gle/gTtC7dR8RkDtwYCc9"
							target="_blank"
							className="menu-link"
							rel="noreferrer"
						>
							Recomienda tu canción
						</a>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default TopMenu;
