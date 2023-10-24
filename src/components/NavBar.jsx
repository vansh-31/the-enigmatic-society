import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PiMagnifyingGlass } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { Tooltip } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import SideNavBar from "./SideNavBar";
const NavBar = () => {
	const isMobilePhone = useMediaQuery({
		query: "(max-width: 600px)",
	});
	return (
		<>
			<nav className="w-full bg-white h-10vh min-h-[70px] flex items-center">
				<div className="flex justify-between items-center w-11/12 max-w-7xl mx-auto">
					{isMobilePhone ? (
						<SideNavBar></SideNavBar>
					) : (
						<>
							<div className="w-1/4 flex-shrink hidden md:block"></div>
							<div className="flex justify-center w-3/4 text-base md:w-2/4 lg:text-lg">
								<NavLink
									className="relative py-6 mx-2 text-gray-600 hover:text-gray-800"
									to="/"
								>
									Home
								</NavLink>
								<NavLink
									className="relative py-6 mx-2 text-gray-600 hover:text-gray-800"
									to="/"
								>
									Events
								</NavLink>
								<NavLink
									className="relative py-6 mx-2 text-gray-600 cursor-wait hover:text-gray-800"
									to="/"
								>
									<Tooltip
										label="Coming Soon"
										placement="bottom"
										aria-label="A tooltip"
									>
										Team
									</Tooltip>
								</NavLink>
								<NavLink
									className="relative py-6 mx-2 text-gray-600 cursor-wait hover:text-gray-800"
									to="/"
								>
									<Tooltip
										label="Coming Soon"
										placement="bottom"
										aria-label="A tooltip"
									>
										Our Story
									</Tooltip>
								</NavLink>
								<NavLink
									className="relative py-6 mx-2 text-gray-600 cursor-wait hover:text-gray-800"
									to="/"
								>
									<Tooltip
										label="Coming Soon"
										placement="bottom"
										aria-label="A tooltip"
									>
										Gallery
									</Tooltip>
								</NavLink>
							</div>
						</>
					)}
					<div className="flex justify-between items-center text-gray-500 w-1/4 ">
						<div className="flex p-1 items-center justify-center border-2 border-gray-400 border-opacity-60 rounded-lg w-2/3 invisible">
							<button className="min-w-[15%] h-full flex justify-center items-center">
								<PiMagnifyingGlass></PiMagnifyingGlass>
							</button>
							<input
								className="p-1 pl-0 w-full focus:outline-none "
								type="text"
								id="search-bar"
								placeholder="Search..."
								onFocus={(e) => {
									e.target.parentElement.classList.remove("border-gray-400");
									e.target.parentElement.classList.add("border-blue-400");
									e.target.parentElement.classList.add("shadow-md");
									e.target.parentElement.classList.add("shadow-blue-300");
								}}
								onBlur={(e) => {
									e.target.parentElement.classList.add("border-gray-400");
									e.target.parentElement.classList.remove("border-blue-400");
									e.target.parentElement.classList.remove("shadow-md");
									e.target.parentElement.classList.remove("shadow-blue-300");
								}}
							/>
						</div>
						<Tooltip
							label="Coming Soon"
							placement="bottom"
							aria-label="A tooltip"
						>
							<button
								id="user-icon"
								className="relative text-3xl text-gray-600 hover:text-gray-800 cursor-wait"
							>
								<AiOutlineUser></AiOutlineUser>
							</button>
						</Tooltip>
					</div>
				</div>
			</nav>
			<Outlet></Outlet>
		</>
	);
};

export default NavBar;
