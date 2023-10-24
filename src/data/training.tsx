import SchoolIcon from "@mui/icons-material/School";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ShowChartIcon from "@mui/icons-material/ShowChart";
// icon, title, content

const features = [
	{
		icon: <SchoolIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Dedicated Training",
		content:
			"Learn how to use AI effectively in your business from our world class experts. From training new staff to content creation, we have you covered.",
	},
	{
		icon: <SmartToyIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Future Proof Your Business",
		content:
			"Understanding how AI is changing business will ensure that your company can thrive in the AI era.",
	},
	{
		icon: <ShowChartIcon fontSize="large" sx={{ color: "#8A2BE2" }} />,
		title: "Gain a Competitive Advantage",
		content:
			"AI can do many things better than humans, leaving you to focus on what AI can't - running your business.",
	},
];

export default features;
