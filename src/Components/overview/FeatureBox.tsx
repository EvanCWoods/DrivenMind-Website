import { Paper, Typography } from "@mui/material";
import React from "react";

interface IFeatureBoxProps {
	icon: React.ReactNode;
	title: string;
	content: string;
}
const FeatureBox: React.FC<IFeatureBoxProps> = ({ icon, title, content }) => {
	return (
		<Paper
			elevation={2}
			sx={{
				paddingX: 2,
				paddingY: 10,
				width: "280px",
				borderRadius: 5,
				marginTop: 5,
				marginX: 5,
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
