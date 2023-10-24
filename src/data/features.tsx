import SecurityIcon from "@mui/icons-material/Security";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import SchoolIcon from "@mui/icons-material/School";
// icon, title, content

const features = [
	{
		icon: <SecurityIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Keep Your Data Safe",
		content:
			"With industry leading techniques, we filter your sensitive data out before anything leaves your organisations control.",
	},
	{
		icon: <TravelExploreIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Enhanced Results",
		content:
			"DrivenMind.ai is committed to ensuring that your business uses AI, and your data for results that are beyond anything you could have imagined.",
	},
	{
		icon: <SwipeRightIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Easy to Use",
		content:
			"DrivenMind.ai is designed to be easy to use, and easy to understand. Your team will start seeing results immediately without having to try",
	},
	{
		icon: <SchoolIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Dedicated AI Training",
		content:
			"We will train your team to use AI in their day to day work, ensuring that you and your team are future proof. ",
	},
];

export default features;
