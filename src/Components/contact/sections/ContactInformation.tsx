import React from "react";
import { Box, Typography } from "@mui/material";
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
const BenefitSection: React.FC = () => (
	<Box display="flex" flexDirection="column" mt={4} mb={8} ml={15}>
		<Typography variant="h2">Learn More About DrivenMind.ai</Typography>
		<Box mt={4}>
			{benefits.map((benefit, index) => (
				<Box display="flex" alignItems="center" mt={6} width="500px">
					{/* <img src={Point} alt="point" style={{ height: "20px" }} /> */}
					<Typography variant="h5" sx={{ ml: 2, fontSize: "1.8em" }}>
						{benefit}
					</Typography>
				</Box>
			))}
		</Box>
	</Box>
);

export default BenefitSection;
