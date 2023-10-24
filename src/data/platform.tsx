import SecurityIcon from "@mui/icons-material/Security";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
// import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
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
		icon: <PublicIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Dedicated Environment",
		content:
			"If your business needs to meet a very specific use case, we will provide a private environment that is dedicated to your business.",
	},
];

export default features;
