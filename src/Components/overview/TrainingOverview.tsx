import { Grid, Typography, useMediaQuery } from "@mui/material";
import features from "../../data/training";
import FeatureBox from "./FeatureBox";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const TrainingOverview = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");

	return (
		<Grid container marginTop={5} paddingX={isSmallScreen ? 2 : 10}>
			<Grid item xs={12} marginTop={5}>
				<Typography variant="h6" sx={{ color: "#8A2BE2" }}>
					AI Training
				</Typography>
				<Typography
					variant="h3"
					marginTop={2}
					fontSize={isSmallScreen ? "2.2rem" : "3rem"}
				>
					Begin Surpassing Your Competition
				</Typography>
				<Typography variant="body1" marginTop={2}>
					Companies that use AI effectively will replace those which don't.
					Let's make you the replacement.
				</Typography>
				<Link
					to="/ai-training"
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
			<Grid item xs={12} display="flex" flexWrap="wrap" justifyContent="center">
				{/* Features */}
				{features.map((feature) => {
					return <FeatureBox {...feature} />;
				})}
			</Grid>
		</Grid>
	);
};

export default TrainingOverview;
