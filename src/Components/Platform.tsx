import React from "react";
import { Box, Typography, useMediaQuery, Paper } from "@mui/material";
import aiPlatform from "../assets/ai-platform.png";
import { useNavigate } from "react-router-dom";

const Platform = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	const navigate = useNavigate();
	return (
		<Box>
			<img
				src={aiPlatform}
				alt="ai training"
				style={{
					width: isSmallScreen ? "100%" : "70%",
					marginLeft: isSmallScreen ? "0%" : "15%",
				}}
			/>

			<Box
				display="flex"
				flexWrap="wrap"
				justifyContent="space-evenly"
				padding={4}
			>
				<Paper
					elevation={3}
					sx={{ padding: 3, maxWidth: "400px", mt: 3, borderRadius: 3 }}
				>
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Upholding Data Integrity & Security
					</Typography>
					<Typography variant="body1" paragraph>
						In today's digital age, security is foundational to our mission at
						DrivenMind.ai. Far from being just a requirement, it's at the heart
						of everything we do. Our proactive approach means we're not just
						adhering to industry standards but actively defining them. We employ
						advanced techniques and regularly update our protocols to safeguard
						every piece of data, from customer details to proprietary
						algorithms. Our robust encryption methods, combined with stringent
						access controls, empower organizations to maintain total control
						over their data. Moreover, our innovative monitoring tools offer
						real-time visibility into data interactions, allowing for swift
						intervention against unauthorized access or potential breaches. With
						DrivenMind.ai, you're not just choosing a service; you're opting for
						a dedicated partner in ensuring the utmost integrity and security of
						your data.
					</Typography>
				</Paper>
				<Paper
					elevation={3}
					sx={{ padding: 3, maxWidth: "400px", mt: 3, borderRadius: 3 }}
				>
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Enhanced Results
					</Typography>
					<Typography variant="body1" paragraph>
						At DrivenMind.ai, our commitment transcends simply integrating AI
						into your operations; it's about unlocking AI's transformative
						potential tailored to your unique needs. Every solution we provide
						is meticulously crafted, aligning with your business objectives to
						ensure results that exceed industry standards. However, our vision
						of AI's impact is comprehensive. Beyond task automation, we harness
						AI for deep data insights, proactive market trend forecasts, and
						enhanced customer engagement. By choosing DrivenMind.ai, you're not
						just selecting a service—you're partnering with a team dedicated to
						elevating every aspect of your business. Our AI solutions offer a
						holistic improvement, from daily operations to customer relations
						and innovative strategies. Together, we aim to position your
						business at the pinnacle of success in a dynamic, AI-driven
						landscape.
					</Typography>
				</Paper>
				<Paper
					elevation={3}
					sx={{ padding: 3, maxWidth: "400px", mt: 3, borderRadius: 3 }}
				>
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Easy to Use
					</Typography>
					<Typography variant="body1" paragraph>
						In today's tech-driven world, adapting to new platforms can be
						overwhelming. At DrivenMind.ai, we're acutely aware of this
						challenge and have prioritized making our platform user-friendly.
						Our significant investment in user experience design ensures that
						even those new to AI can navigate our platform effortlessly. We go
						beyond intuitive design. Our platform features step-by-step
						interactive tutorials and a dedicated customer support team, ready
						to assist at any juncture. We also offer diverse resources, from
						guides to webinars, to ensure a smooth transition for all users. At
						DrivenMind.ai, we're more than just a service provider. We consider
						ourselves partners in your AI journey. We believe that AI's vast
						potential should be within reach for everyone, regardless of
						technical expertise. Our goal is to empower every team member to
						harness AI's capabilities, driving collective success for your
						organization.
					</Typography>
				</Paper>
			</Box>
			<Box
				paddingY={3}
				textAlign="center"
				width="70%"
				mx="15%"
				borderRadius={10}
				sx={{
					background: "#8A2BE2",
					color: "white",
					"&:hover": { cursor: "pointer", background: "#943de4" },
				}}
				onClick={() =>
					window.open("https://test-drivenmind.azurewebsites.net/")
				}
			>
				<Typography variant="h3">Visit The Platform!</Typography>
				<Typography variant="body1">
					Try it out and see how DrivenMind will transform your business.
				</Typography>
			</Box>
		</Box>
	);
};

export default Platform;
