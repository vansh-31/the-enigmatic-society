import React from "react";
import { NavLink } from "react-router-dom";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Tooltip,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import enigmaBirdLogo from "../static/images/enigma-bird-logo.png";
const SideNavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} onClick={onOpen}>
				<GiHamburgerMenu></GiHamburgerMenu>
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="xs"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size="lg" padding="6" />
					<DrawerHeader
						fontSize="2xl"
						alignItems="center"
						alignContent="center"
					>
						<NavLink
							to="/"
							className="flex justify-center items-center"
							onClick={onClose}
						>
							<img
								src={enigmaBirdLogo}
								alt="THE ENIGMATIC SOCIETY"
								className="w-36"
							/>
						</NavLink>
					</DrawerHeader>
					<Divider></Divider>
					<DrawerBody>
						<Box fontSize="2xl" textAlign="center" marginY="25px">
							<NavLink
								className=" text-gray-600 hover:text-gray-800"
								to="/"
								onClick={onClose}
							>
								Home
							</NavLink>
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="25px">
							<NavLink
							onClick={onClose}
								className="relative py-6 mx-2 text-gray-600 hover:text-gray-800"
								to="/events"
							>
								Events
							</NavLink>
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="25px">
							<div
								className="mx-2 text-gray-600 cursor-wait hover:text-gray-800"
								to="/"
							>
								<Tooltip
									label="Coming Soon"
									placement="bottom"
									aria-label="A tooltip"
								>
									Team
								</Tooltip>
							</div>
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="25px">
							<div
								className="mx-2 text-gray-600 cursor-wait hover:text-gray-800"
								to="/"
							>
								<Tooltip
									label="Coming Soon"
									placement="bottom"
									aria-label="A tooltip"
								>
									Our Story
								</Tooltip>
							</div>
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="25px">
							<div
								className="mx-2 text-gray-600 cursor-wait hover:text-gray-800"
								to="/"
							>
								<Tooltip
									label="Coming Soon"
									placement="bottom"
									aria-label="A tooltip"
								>
									Gallery
								</Tooltip>
							</div>
						</Box>
					</DrawerBody>

					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SideNavBar;
