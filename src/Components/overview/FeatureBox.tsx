import { Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface IFeatureBoxProps {
	icon: React.ReactNode;
	title: string;
	content: string;
}
const FeatureBox: React.FC<IFeatureBoxProps> = ({ icon, title, content }) => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");

	return (
		<Paper
			elevation={3}
			sx={{
				paddingX: 2,
				paddingY: 5,
				width: "280px",
				borderRadius: 5,
				marginTop: 5,
				marginX: isSmallScreen ? 0 : 5,
			}}
		>
			{/* Icon */}
			{icon}
			{/* Title */}
			<Typography variant="h5" marginTop={1}>
				{title}
			</Typography>
			{/* Content */}
			<Typography variant="body2" marginTop={1}>
				{content}
			</Typography>
		</Paper>
	);
};

export default FeatureBox;
