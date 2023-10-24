import { Box, Button, TextField, Typography } from "@mui/material";
import LandingImage from "../assets/landing-background.svg";
import MicrosoftLogo from "../assets/Microsoft_logo.png";

const Landing = () => {
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
				paddingY: "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* Text */}
			<Box display="flex" justifyContent="center" flexWrap="wrap">
				<Typography variant="h2" width="100%" textAlign="center">
					Revolutionise Your Business
				</Typography>
				<Typography variant="h2" width="100%" textAlign="center">
					With DrivenMind.ai
				</Typography>
				<Typography
					variant="h5"
					width="100%"
					textAlign="center"
					marginTop={3}
					maxWidth="900px"
				>
					We are a team of passionate AI engineers and developers who are
					committed to helping you use AI to get the most out of your business.
				</Typography>
				<Typography variant="h6" width="100%" textAlign="center" marginTop={3}>
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
							width: "280px",
							borderRadius: "5px",
						}}
					/>
					<Button
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
						Book a Demo!
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Landing;
