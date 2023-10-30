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
					Transform Your Business with AI
				</Typography>
				<Typography variant="body1" marginTop={2}>
					At DrivenMind.ai, we bridge the gap between traditional business
					processes and AI-driven solutions. Whether you're an SMB or an
					enterprise, our platform empowers you with the tools to innovate,
					adapt, and excel in today's digital landscape. Backed by our strategic
					partnership with Microsoft, we ensure you harness the full potential
					of AI.
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
		</Grid>
	);
};

export default PlatformOverview;
