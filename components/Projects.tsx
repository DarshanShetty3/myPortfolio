import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
	return (
		<section id="projects">
			<h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
				PROJECTS
			</h2>
			<p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
				EXPLORE NOW
			</p>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
				<Link
					href="https://darshan-youtube-clone.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
					className="z-[1]"
				>
					<div className="flex flex-col items-center text-center bg-gray-900 p-5 rounded-lg shadow-lg">
						<Image
							src="/FirstProject.png"
							height={180}
							width={130}
							alt="Darshan Shetty - SDE"
						/>
						<div className="mt-3">
							<p className="text-white font-semibold text-xl">YouTube Clone</p>
							<p className="text-gray-500 text-sm mt-2">
								The YouTube Clone project is a feature-rich web application that replicates the core functionality of YouTube, including video streaming, search, and etc.
							</p>
						</div>
					</div>
				</Link>

				<Link
					href="https://darshan-note-app.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
					className="z-[1]"
				>
					<div className="flex flex-col items-center text-center bg-gray-900 p-5 rounded-lg shadow-lg">
						<Image
							src="/SecondProject.png"
							height={150}
							width={118}
							alt="Darshan Shetty - SDE"
						/>
						<div className="mt-3">
							<p className="text-white font-semibold text-xl">Note App</p>
							<p className="text-gray-500 text-sm mt-2">
								The Notes App is a simple and efficient tool for creating, editing, and managing notes. Built with React for a dynamic user interface.
							</p>
						</div>
					</div>
				</Link>

				<Link
					href="https://darshan-ecommercee.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
					className="z-[1]"
				>
					<div className="flex flex-col items-center text-center bg-gray-900 p-5 rounded-lg shadow-lg">
						<Image
							src="/ThirdProject.png"
							height={80}
							width={85}
							alt="Darshan Shetty - SDE"
						/>
						<div className="mt-3">
							<p className="text-white font-semibold text-xl">E-Commerce</p>
							<p className="text-gray-500 text-sm mt-2">
								The E-commerce App is a fully functional platform designed for seamless online shopping. Built with React, it features product listings, a dynamic cart system, and secure checkout.
							</p>
						</div>
					</div>
				</Link>
				<Link
					href="https://darshan-weather-forecast.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
					className="z-[1]"
				>
					<div className="flex flex-col items-center text-center bg-gray-900 p-5 rounded-lg shadow-lg">
						<Image
							src="/FourProject.png"
							height={80}
							width={70}
							alt="Darshan Shetty - SDE"
						/>
						<div className="mt-3">
							<p className="text-white font-semibold text-xl">Weather Forecast</p>
							<p className="text-gray-500 text-sm mt-2">
								The Weather Forecast App provides real-time weather updates and detailed forecasts for any location. Built with React and integrated with a weather API.
							</p>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Projects;
