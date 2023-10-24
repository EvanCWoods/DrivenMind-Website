import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import DataSecurity from "../assets/data-security.png";

const AITraining = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	return (
		<Box>
			<Typography
				variant="h3"
				gutterBottom
				fontSize={isSmallScreen ? "2rem" : "3rem"}
				marginTop={5}
				textAlign="center"
			>
				AI Training
			</Typography>

			<Grid container padding={4}>
				<Grid
					item
					md={12}
					lg={6}
					paddingX={isSmallScreen ? 2 : 10}
					marginTop={5}
				>
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Dedicated Training
					</Typography>
					<Typography variant="body1" paragraph>
						Learn how to use AI effectively in your business from our
						world-class experts. From training new staff to content creation, we
						have you covered. Our trainers come with years of experience and
						real-world insights, ensuring that the lessons are not just
						theoretical but applicable. The structured modules are tailored for
						every business need, providing step-by-step guidelines for a
						seamless integration of AI into your operations.
					</Typography>
				</Grid>
				<Grid item md={0} lg={6}>
					<img
						src={DataSecurity}
						alt="data security"
						style={{
							width: "400px",
							display: !isSmallScreen ? "block" : "none",
						}}
					/>
				</Grid>
				<Grid item md={0} lg={6}>
					{" "}
					<img
						src={DataSecurity}
						alt="data security"
						style={{
							width: "400px",
							display: !isSmallScreen ? "block" : "none",
						}}
					/>
				</Grid>
				<Grid
					item
					md={12}
					lg={6}
					paddingX={isSmallScreen ? 2 : 10}
					marginTop={5}
				>
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Future Proof Your Business
					</Typography>
					<Typography variant="body1" paragraph>
						Understanding how AI is changing business will ensure that your
						company can thrive in the AI era. As technological advancements
						continue to disrupt traditional business models, staying updated
						with AI trends becomes vital. Embracing AI now positions your
						business at the forefront of innovation, ensuring resilience against
						market shifts and an ever-evolving digital landscape.
					</Typography>
				</Grid>

				<Grid
					item
					md={12}
					lg={6}
					paddingX={isSmallScreen ? 2 : 10}
					marginTop={5}
				>
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Gain a Competitive Advantage
					</Typography>
					<Typography variant="body1" paragraph>
						AI can do many things better than humans, leaving you to focus on
						what AI can't - running your business. By automating repetitive
						tasks and optimizing workflows, AI can drastically reduce
						operational costs and increase efficiency. This not only enhances
						productivity but also provides you with valuable data-driven
						insights, enabling smarter business decisions. Embrace AI, and
						you'll be placing your business a step ahead of the competition.
					</Typography>
				</Grid>
				<Grid item md={0} lg={6}>
					<img
						src={DataSecurity}
						alt="data security"
						style={{
							width: "400px",
							display: !isSmallScreen ? "block" : "none",
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AITraining;
