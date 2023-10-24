import { Grid, Typography, useMediaQuery } from "@mui/material";
import features from "../../data/platform";
import FeatureBox from "./FeatureBox";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const PlatformOverview = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");

	return (
		<Grid container marginTop={5} paddingX={isSmallScreen ? 2 : 10}>
			<Grid item xs={12} md={4} marginTop={5}>
				<Typography variant="h6" sx={{ color: "#8A2BE2" }}>
					The Platform
				</Typography>
				<Typography
					variant="h3"
					marginTop={2}
					fontSize={isSmallScreen ? "2.2rem" : "3rem"}
				>
					Your Business Is Missing Out
				</Typography>
				<Typography variant="body1" marginTop={2}>
					The AI revolution has started, and there's no stopping it now.
					Businesses that embrace the change will thrive, while those who don't
					will lag behind.
				</Typography>
				<Link
					to="/platform"
					style={{
						color: "#8A2BE2",
						textDecoration: "none",
						display: "flex",
						alignItems: "center",
						marginTop: 15,
					}}
				>
					Learn More
					<ArrowRightAltIcon />
				</Link>
			</Grid>
			<Grid xs={0} md={1}></Grid>
			<Grid
				item
				xs={12}
				md={7}
				display="flex"
				flexWrap="wrap"
				justifyContent="center"
			>
				{/* Features */}
				{features.map((feature) => {
					return <FeatureBox {...feature} />;
				})}
			</Grid>
			{/* Description */}
			{/* <Grid item xs={0} md={2}></Grid>
			<Grid item xs={12} md={8} marginY={10}>
				<Typography variant="h3" marginTop={5} textAlign="center">
					How It Works
				</Typography>
				<Typography variant="body1" marginTop={2} textAlign="center">
					DrivenMind.ai stands unrivalled as the sole platform enabling
					businesses to utilize AI securely and precisely. With ongoing support
					from Microsoft, we guarantee our customers access to the latest and
					most secure technological advancements.
				</Typography>
			</Grid>
			<Grid item xs={0} md={2}></Grid> */}
		</Grid>
	);
};

export default PlatformOverview;
