import { Box, Button } from "@mui/material";
import Logo from "../assets/DrivenMindLogo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
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
			<Button
				onClick={() => navigate("/contact")}
				sx={{
					borderRadius: "10px",
					background: "#8A2BE2",
					color: "white",
					paddingY: 0,
					paddingX: 2,
					marginLeft: 1,
					textTransform: "none",
					"&:hover": {
						backgroundColor: "#8A2BE2", // prevents background color change
					},
				}}
			>
				Contact
			</Button>
		</Box>
	);
};
export default Header;
