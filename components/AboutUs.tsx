import Logo2 from 'svg/logo2';

import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { CgCoffee } from 'react-icons/cg';

const AboutUs = () => {
	return (
		<>
			<div className="flex justify-center m-auto my-4 sm:my-0">
				<Logo2 width={180} />
			</div>
			<div className="mt-6 sm:mt-10">
				<div className="text-justify">
					<p>
						<b>Bedroom Radio</b> existe para descubrir y amplificar la música de artistas hispanohablantes
						en todo el mundo.
					</p>
					<p className="mt-2">
						Nuestro objetivo es dar voz y un espacio seguro a todx artista emergente o con poca visibilidad.
					</p>
					<p className="mt-2">Somos un equipo que está aquí por amor a la música.</p>
				</div>
				<hr className="my-6" />
				<div className="flex justify-around">
					<div className="text-center">
						<div>Created by:</div>
						<div className="font-bold">Adrián Martín</div>
						<div className="flex justify-between mt-2">
							<a
								href="https://www.instagram.com/_adrimartin/"
								target="_blank"
								className="text-blue-400 hover:scale-110"
								rel="noreferrer"
							>
								<FaInstagram />
							</a>
							<a
								href="https://twitter.com/_adrimartin"
								target="_blank"
								className="text-blue-400 hover:scale-110"
								rel="noreferrer"
							>
								<FaTwitter />
							</a>
							<a
								href="https://www.linkedin.com/in/adrian-martin-jaimez/"
								target="_blank"
								className="text-blue-400 hover:scale-110"
								rel="noreferrer"
							>
								<FaLinkedin />
							</a>
							{/* <a href="" className="text-blue-400 hover:scale-110"> 
											<FaGithub />*/}
						</div>
					</div>
					<div className="text-center">
						<div>Built by:</div>
						<div className="font-bold">Jonathan F.M.</div>
						<div className="flex justify-between mt-2">
							<a
								href="https://www.instagram.com/jonathanfdez_poak/"
								target="_blank"
								className="text-blue-400 hover:scale-110"
								rel="noreferrer"
							>
								<FaInstagram />
							</a>
							<a
								href="https://twitter.com/JonathanFdezM"
								target="_blank"
								className="text-blue-400 hover:scale-110"
								rel="noreferrer"
							>
								<FaTwitter />
							</a>
							<a
								href="https://www.linkedin.com/in/jonathanfernandezfm/"
								target="_blank"
								className="text-blue-400 hover:scale-110"
								rel="noreferrer"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://github.com/jonathanfernandezfm"
								target="_blank"
								className="text-blue-400 transition hover:scale-110"
								rel="noreferrer"
							>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
				<div className="justify-center w-full mt-8 text-xs">
					<div className="flex justify-center mb-4">
						<a
							href="https://ko-fi.com/jonathanfm"
							className="flex items-center gap-2 text-lg text-blue-400 transition hover:scale-105"
							target="_blank"
							rel="noreferrer"
						>
							Apoyanos <CgCoffee />
						</a>
					</div>
					Si eres una persona o compañia que quiera unirse a la causa, patrocinar, donar o trabajar con
					nosotrxs de alguna manera:{' '}
					<a href="mailto:infobedroomradio@gmail.com" className="text-blue-400">
						infobedroomradio@gmail.com
					</a>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
