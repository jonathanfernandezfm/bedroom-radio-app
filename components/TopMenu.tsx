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
							className="relative" //menu-link
							onClick={() => {
								toggleModalInfo(true);
								toggleMenu();
							}}
							aria-label="Sobre nosotros"
						>
							Sobre nosotros
							<svg
								width="164"
								height="54"
								viewBox="0 0 164 54"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute z-50 link-hover top-[-13px] left-[-20px]"
							>
								<path
									d="M99.4014 2.16554C79.9784 0.617403 -0.141808 9.86204 3.09537 32.6859C7.14184 61.2158 165.359 56.5713 160.908 29.0367C157.347 7.00901 68.9181 6.69936 22.5185 3.82425"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</button>
					</li>
					<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
						<a
							href="mailto:infobedroomradio@gmail.com"
							className="relative" //menu-link
							title="Escribe un email a bedroom radio"
						>
							Contacto
							<svg
								width="110"
								height="51"
								viewBox="0 0 110 51"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute z-50 link-hover top-[-16px] left-[-17px]"
							>
								<path
									d="M104.806 7.09638C91.7725 5.55347 -0.134422 7.00419 2.03789 29.7511C4.75328 58.1847 110.925 53.5559 107.938 26.1142C105.549 4.16078 43.9685 4.86542 12.832 2"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
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
