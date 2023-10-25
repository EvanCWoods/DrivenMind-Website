import { Box, Menu, MenuItem } from "@mui/material";
import Logo from "../assets/DrivenMindLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react"; // Import useState

const Header = () => {
	const navigate = useNavigate();

	const [anchorEl, setAnchorEl] = useState(null); // For Menu control

	const handleMenuOpen = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (path: any) => {
		navigate(path);
		handleMenuClose();
	};

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			paddingX={3}
			paddingY={1}
		>
			<Link to="/">
				<img src={Logo} alt="logo" style={{ width: "40px", height: "40px" }} />
			</Link>
			<div>
				<MenuIcon
					fontSize="large"
					sx={{ color: "#8A2BE2", "&:hover": { cursor: "pointer" } }}
					onClick={handleMenuOpen}
				/>
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleMenuClose}
				>
					<MenuItem onClick={() => handleMenuItemClick("/")}>Home</MenuItem>
					<MenuItem onClick={() => handleMenuItemClick("/ai-training")}>
						AI Training
					</MenuItem>
					<MenuItem onClick={() => handleMenuItemClick("/platform")}>
						Platform
					</MenuItem>
					<MenuItem onClick={() => handleMenuItemClick("/contact")}>
						Contact
					</MenuItem>
				</Menu>
			</div>
		</Box>
	);
};

export default Header;
