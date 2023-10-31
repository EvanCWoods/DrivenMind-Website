import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
// import Point from "../../../assets/WhatWeDoAssets/WhatWeDoPoint.svg";

const benefits = [
	"🚀 Supercharge your productivity with DrivenMind",
	"🤖 Harness the power of AI, tailored to your business needs.",
	"⏳ Save time and money by automating repetitive tasks.",
];

/**
 * Renders a section displaying the benefits of a program.
 *
 * @returns JSX (React elements) that will be rendered by the React application. It renders a section with a title and a list of benefits.
 */
const BenefitSection: React.FC = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	return (
		<Box
			display="flex"
			flexDirection="column"
			mt={4}
			mb={8}
			marginLeft={isSmallScreen ? 0 : 5}
		>
			<Typography variant="h4" fontSize={isSmallScreen ? "2.5rem" : "3.5rem"}>
				Start Your Business' AI Revolution!
			</Typography>
			<Box mt={4}>
				{benefits.map((benefit, index) => (
					<Box display="flex" alignItems="center" mt={isSmallScreen ? 2 : 5}>
						{/* <img src={Point} alt="point" style={{ height: "20px" }} /> */}
						<Typography
							variant="h6"
							sx={{ ml: 2, fontSize: isSmallScreen ? "1.1rem" : "1.3rem" }}
						>
							{benefit}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};
export default BenefitSection;
