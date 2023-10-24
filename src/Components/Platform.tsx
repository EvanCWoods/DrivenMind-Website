import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import DataSecurity from "../assets/data-security.png";

const Platform = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	return (
		<Box>
			{/* <Typography variant="h4" gutterBottom>
				The DrivenMind Platform
			</Typography>

			<Typography variant="body1" paragraph>
				The AI revolution isn't just a trend or a buzzword - it's a fundamental
				shift in the way businesses operate, analyze data, and serve their
				customers. ... // You can continue to add the other points here...
			</Typography> */}
			<Grid container padding={4}>
				<Grid
					item
					md={12}
					lg={6}
					paddingRight={20}
					paddingLeft={10}
					marginTop={5}
				>
					<Typography variant="h4" gutterBottom>
						Keep Your Data Safe
					</Typography>
					<Typography variant="body1" paragraph>
						Security isn't just a checkbox for us—it's a fundamental pillar. At
						DrivenMind.ai, we not only prioritize but also innovate in securing
						sensitive data. By employing industry-leading techniques and
						continuously updating our protocols, we ensure that all data—be it
						customer details, internal communications, or proprietary
						algorithms—remain shielded. Our advanced encryption methods and
						rigorous access controls mean your organization can retain full
						control over its data. Beyond just protection, we offer robust
						monitoring tools, providing real-time insights into any data
						interactions, thereby preventing unauthorized access or potential
						leaks even before they can begin.
					</Typography>
				</Grid>
				<Grid item md={0} lg={6}>
					<img
						src={DataSecurity}
						alt="data security"
						style={{
							width: "400px",
							display: isSmallScreen ? "block" : "none",
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
							display: isSmallScreen ? "block" : "none",
						}}
					/>
				</Grid>
				<Grid
					item
					md={12}
					lg={6}
					paddingLeft={20}
					paddingRight={10}
					marginTop={5}
				>
					<Typography variant="h4" gutterBottom>
						Enhanced Results
					</Typography>
					<Typography variant="body1" paragraph>
						At DrivenMind.ai, our dedication isn't just about bringing AI to
						your business—it's about harnessing the full power of AI to achieve
						transformative results. Our bespoke solutions are crafted with your
						unique business goals in mind, ensuring tailored strategies that
						yield outcomes surpassing benchmarks. But results with DrivenMind.ai
						are not just quantitative; they are qualitative. AI, in our hands,
						doesn't just automate repetitive tasks. It provides valuable
						insights, forecasts market trends, personalizes customer
						experiences, and much more. In essence, partnering with us means
						elevating every facet of your business—operations, customer
						relations, innovation, and more—to unprecedented heights.
					</Typography>
				</Grid>

				<Grid
					item
					md={12}
					lg={6}
					paddingRight={20}
					paddingLeft={10}
					marginTop={5}
				>
					<Typography variant="h4" gutterBottom>
						Easy to Use
					</Typography>
					<Typography variant="body1" paragraph>
						Transitioning to new technology platforms can often feel daunting.
						Recognizing this, DrivenMind.ai has gone the extra mile to make our
						platform as intuitive as possible. We've invested significant
						resources in user experience design, ensuring even those unfamiliar
						with AI can navigate and utilize our platform with ease. Our
						interactive tutorials, on-hand customer support, and a plethora of
						resources aim to flatten the learning curve. We're not just
						providers; we're partners in your AI journey. Our belief is firm:
						AI's transformative potential should be accessible to all, from the
						tech-savvy to the novice, ensuring every member of your team can
						harness its power effectively and efficiently.
					</Typography>
				</Grid>
				<Grid item md={0} lg={6}>
					<img
						src={DataSecurity}
						alt="data security"
						style={{
							width: "400px",
							display: isSmallScreen ? "block" : "none",
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Platform;
