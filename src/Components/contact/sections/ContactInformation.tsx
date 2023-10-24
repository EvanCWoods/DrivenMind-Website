import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
// import Point from "../../../assets/WhatWeDoAssets/WhatWeDoPoint.svg";

const benefits = [
	"Book a demo",
	"Discover how DrivenMind can help your organization",
	"Get leading AI training and support",
	"Understand AI better",
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
			<Typography variant="h2" fontSize={isSmallScreen ? "2.5rem" : "4rem"}>
				Learn More About DrivenMind.ai
			</Typography>
			<Box mt={4}>
				{benefits.map((benefit, index) => (
					<Box display="flex" alignItems="center" mt={isSmallScreen ? 2 : 5}>
						{/* <img src={Point} alt="point" style={{ height: "20px" }} /> */}
						<Typography
							variant="h5"
							sx={{ ml: 2, fontSize: isSmallScreen ? "1.2rem" : "1.5rem" }}
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
