import {
	Box,
	Button,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import LandingImage from "../assets/landing-background.svg";
import MicrosoftLogo from "../assets/Microsoft_logo.png";

const Landing = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	return (
		<Box
			sx={{
				backgroundImage: `url(${LandingImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				height: "auto",
				marginTop: "-60px",
				paddingY: isSmallScreen ? "100px" : "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* Text */}
			<Box display="flex" justifyContent="center" flexWrap="wrap">
				<Typography
					variant="h2"
					width="100%"
					textAlign="center"
					fontSize={isSmallScreen ? "2.5rem" : "4rem"}
				>
					Revolutionise Your Business
				</Typography>
				<Typography
					variant="h2"
					width="100%"
					textAlign="center"
					fontSize={isSmallScreen ? "2.5rem" : "4rem"}
				>
					With DrivenMind.ai
				</Typography>
				<Typography
					variant="h5"
					width="100%"
					textAlign="center"
					marginTop={3}
					paddingX={3}
					maxWidth="900px"
					fontSize={isSmallScreen ? "1.1rem" : "1.5rem"}
				>
					We are a team of passionate AI engineers and developers who are
					committed to helping you use AI to get the most out of your business.
				</Typography>
				<Typography
					variant="h6"
					width="100%"
					textAlign="center"
					marginTop={3}
					fontSize={isSmallScreen ? "1.1rem" : "1.5rem"}
				>
					Proudly Supported By Microsoft{" "}
					<img
						src={MicrosoftLogo}
						alt="microsoft logo"
						style={{ width: "21px", height: "21px", verticalAlign: "middle" }}
					/>
				</Typography>
				<Box display="flex" marginTop={10}>
					<TextField
						placeholder="Enter your email"
						variant="outlined"
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: "transparent",
								},
							},
							background: "white",
							width: isSmallScreen ? "220px" : "280px", // Conditional size based on isSmallScreen
							borderRadius: "5px",
						}}
					/>
					<Button
						sx={{
							borderRadius: isSmallScreen ? "8px" : "10px", // Conditional size based on isSmallScreen
							background: "#8A2BE2",
							color: "white",
							paddingY: 0,
							paddingX: isSmallScreen ? 1 : 2, // Conditional padding based on isSmallScreen
							marginLeft: 1,
							textTransform: "none",
							"&:hover": {
								backgroundColor: "#8A2BE2", // prevents background color change
							},
						}}
					>
						Book a Demo!
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Landing;
