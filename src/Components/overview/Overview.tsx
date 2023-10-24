import { Grid, Typography } from "@mui/material";
import features from "../../data/features";
import FeatureBox from "./FeatureBox";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Overview = () => {
	return (
		<Grid container marginTop={5} paddingX={10}>
			<Grid item xs={12} md={4} marginTop={5}>
				<Typography variant="h6" sx={{ color: "#8A2BE2" }}>
					Overview
				</Typography>
				<Typography variant="h3" marginTop={2}>
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
		</Grid>
	);
};

export default Overview;
