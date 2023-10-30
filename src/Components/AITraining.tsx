import React from "react";
import { Box, Typography, useMediaQuery, Paper } from "@mui/material";
import aiTraining from "../assets/ai-training.png";

const AITraining = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	return (
		<Box>
			<img
				src={aiTraining}
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
						Dedicated Training
					</Typography>
					<Typography variant="body1" paragraph>
						Unlock the transformative power of artificial intelligence (AI) with
						our top-tier experts. As AI continues to evolve, businesses must
						leverage its capabilities, and we're here to guide you. Our team,
						with their extensive real-world experience, ensures that you receive
						practical, actionable insights. Training new staff in the realm of
						AI? Our modules simplify this, offering clear instructions suitable
						for both novices and veterans. Beyond training, AI's role in content
						creation is undeniable. Our specialists will help you harness AI
						tools to craft impactful content tailored to your audience. What
						sets our training apart is its adaptability. Recognizing that every
						business has unique challenges, our curriculum provides custom
						guidelines for seamless AI integration, regardless of your business
						size or industry. Partner with us to navigate AI's vast landscape,
						positioning your business for future success.
					</Typography>
				</Paper>
				<Paper
					elevation={3}
					sx={{ padding: 3, maxWidth: "400px", mt: 3, borderRadius: 3 }}
				>
					{" "}
					<Typography
						variant="h4"
						gutterBottom
						fontSize={isSmallScreen ? "1.7rem" : "2rem"}
					>
						Future Proof Your Business
					</Typography>
					<Typography variant="body1" paragraph>
						In today's digital era, grasping AI's impact on business is crucial
						for success. As AI reshapes industries, understanding its trends
						ensures your company's resilience. Traditional models face
						disruption, highlighting the urgency to stay updated with AI
						innovations. Embracing AI now is about more than staying
						relevant—it's about future-proofing. This technology is transforming
						tasks, enhancing decisions, and personalizing experiences. By
						integrating AI, your business remains agile, adaptive, and ahead in
						the innovation curve. With the rapid pace of AI development, early
						adoption also positions your business as a leader rather than a
						follower. Furthermore, AI-driven solutions offer a competitive edge,
						setting you apart in the market. In short, to thrive in this
						AI-driven world, recognizing its potential and weaving it into your
						strategy is paramount.
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
						Gain a Competitive Advantage
					</Typography>
					<Typography variant="body1" paragraph>
						In today's technological landscape, artificial intelligence (AI)
						stands out as a tool that surpasses human capabilities in various
						tasks. While AI excels in automation, data analysis, and pattern
						recognition, it's the unique blend of AI and human intuition that
						drives business success. By delegating repetitive tasks to AI, you
						free up time for strategic decision-making. The integration of AI
						into business operations not only streamlines processes but also
						reduces costs. This efficiency leads to quicker, more accurate
						results. Beyond automation, AI's ability to analyze vast datasets
						offers valuable insights, aiding in informed decision-making and
						anticipating market shifts. In an ever-competitive market,
						integrating AI is a strategic move towards innovation and staying
						ahead. By embracing AI, you position your business at the cutting
						edge, ensuring a competitive edge and paving the way for continued
						growth.
					</Typography>
				</Paper>
			</Box>
		</Box>
	);
};

export default AITraining;
