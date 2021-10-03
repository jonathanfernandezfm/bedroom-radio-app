import React from 'react';

const TopMenu = () => {
	return (
		<ul className="fixed z-40 flex gap-8 mt-6 text-lg text-center text-white right-10 ">
			<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
				<a className="menu-link">Únete</a>
			</li>
			<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
				<a className="menu-link">Sobre nosotros</a>
			</li>
			<li className="transition-transform hover:-rotate-3 hover:scale-105 hover:cursor-pointer">
				<a className="menu-link">Contacto</a>
			</li>
		</ul>
	);
};

export default TopMenu;
