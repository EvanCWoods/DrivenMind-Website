import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import faq from "../data/faq";

const FrequentlyAskedQuestions = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");

	return (
		<Box marginTop={10} paddingX={isSmallScreen ? 2 : 10}>
			<Typography variant="h6" sx={{ color: "#8A2BE2" }}>
				Support
			</Typography>
			<Typography
				variant="h3"
				marginTop={2}
				fontSize={isSmallScreen ? "1.7rem" : "3rem"}
			>
				Frequently Asked Questions
			</Typography>
			<Typography variant="body1" marginTop={2} marginBottom={10}>
				Everything You Need To Know About DrivenMind.ai
			</Typography>
			{/* Output the FAQ's */}
			{faq.map((item: any) => (
				<Box>
					<Divider />
					<Box paddingY={3} display="flex" width="100%">
						<Typography
							variant="body1"
							width={isSmallScreen ? "40%" : "40%"}
							marginRight={isSmallScreen ? "0%" : "10%"}
						>
							{item.question}
						</Typography>
						<Typography
							variant="body1"
							width={isSmallScreen ? "50%" : "40%"}
							marginLeft="10%"
						>
							{item.answer}
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default FrequentlyAskedQuestions;
