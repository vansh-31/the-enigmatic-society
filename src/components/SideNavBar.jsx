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
					<DrawerCloseButton   size="lg"/>
					<DrawerHeader fontSize="2xl">THE ENIGMATIC SOCIETY</DrawerHeader>
					<Divider></Divider>
					<DrawerBody>
						<Box fontSize="2xl" textAlign="center" marginY="30px">
							<NavLink className=" text-gray-600 hover:text-gray-800" to="/">
								Home
							</NavLink>
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="30px">
							<NavLink
								className="relative py-6 mx-2 text-gray-600 hover:text-gray-800"
								to="/"
							>
								Events
							</NavLink>
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="30px">
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
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="30px">
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
						</Box>
						<Box fontSize="2xl" textAlign="center" marginY="30px">
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
						</Box>
					</DrawerBody>

					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SideNavBar;
