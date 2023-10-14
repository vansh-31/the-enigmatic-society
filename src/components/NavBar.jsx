import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PiMagnifyingGlass } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
const NavBar = () => {
	return (
		<>
			<nav className="w-full bg-white h-10vh min-h-[70px] flex items-center">
				<div className="flex justify-between items-center w-11/12 max-w-7xl mx-auto">
					<div className="w-1/4 flex-shrink"></div>
					<div className="flex justify-center w-2/4 text-lg">
						<NavLink
							className="py-6 px-3 text-gray-600 hover:text-gray-800"
							to="/"
						>
							Events
						</NavLink>
						<NavLink
							className="py-6 px-3 text-gray-600 hover:text-gray-800"
							to="/"
						>
							Team
						</NavLink>
						<NavLink
							className="py-6 px-3 text-gray-600 hover:text-gray-800"
							to="/"
						>
							Our Story
						</NavLink>
						<NavLink
							className="py-6 px-3 text-gray-600 hover:text-gray-800"
							to="/"
						>
							Gallery
						</NavLink>
					</div>
					<div className="flex justify-between items-center text-gray-500 w-1/4 ">
						<div className="flex p-1 items-center justify-center border-2 border-gray-400 border-opacity-60 rounded-lg w-2/3">
							<button className="min-w-[15%] h-full flex justify-center items-center" >
								<PiMagnifyingGlass></PiMagnifyingGlass>
							</button>
							<input
								className="p-1 pl-0 w-full focus:outline-none "
								type="text"
								id="search-bar"
								placeholder="Search..."
								onFocus={(e) => {
									e.target.parentElement.classList.add("border-blue-400");
									e.target.parentElement.classList.add("shadow-md");
									e.target.parentElement.classList.add("shadow-blue-300");
								}}
								onBlur={(e) => {
									e.target.parentElement.classList.remove("border-blue-400");
									e.target.parentElement.classList.remove("shadow-md");
									e.target.parentElement.classList.remove("shadow-blue-300");
								}}
							/>
						</div>
						<button className="text-3xl text-gray-600 cursor-pointer hover:text-gray-800">
							<AiOutlineUser></AiOutlineUser>
						</button>
					</div>
				</div>
			</nav>
			<Outlet></Outlet>
		</>
	);
};

export default NavBar;
