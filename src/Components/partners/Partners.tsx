import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import blockLogo from "../../assets/block-logo.png";
import thunderlabsLogo from "../../assets/thunderlabs-logo.png";
import lighthousedLogo from "../../assets/lighthouse-logo.png";

const partnerData = [
	{
		name: "Lighthouse Law",
		logo: lighthousedLogo,
		description: "DrivenMind Platform for Lawyers",
		website: "https://www.lawgroup.com.au/",
	},
	{
		name: "ThunderLabs",
		logo: thunderlabsLogo,
		description: "AI-Enhanced Developer Training",
		website: "https://thunderlabs.com.au/",
	},
	{
		name: "Block Software",
		logo: blockLogo, // Replace with path to logo image
		description: "AI-Enhanced Developer Training",
		website: "https://blocksoftware.com.au/",
	},
];

const Partners = () => {
	const isSmallScreen = useMediaQuery("(max-width: 760px)");

	return (
		<Box mt={10} paddingX={isSmallScreen ? 2 : 10}>
			<Typography variant="h6" sx={{ color: "#8A2BE2" }}>
				Our Partners
			</Typography>
			<Typography
				variant="h3"
				marginTop={2}
				fontSize={isSmallScreen ? "2.2rem" : "3rem"}
			>
				Join These AI-Enhanced Companies
			</Typography>
			{/* Partners */}
			<Box
				display="flex"
				overflow="auto"
				flexWrap="wrap"
				p={2}
				maxWidth="100%"
				justifyContent="space-evenly"
			>
				{partnerData.map((partner, index) => (
					<Box
						key={index}
						display="flex"
						flexDirection="column"
						alignItems="center"
						minWidth={200}
						marginTop={5}
						onClick={() => window.open(partner.website, "_blank")}
						sx={{ "&:hover": { cursor: "pointer" } }}
					>
						<img
							alt={partner.name}
							src={partner.logo}
							style={{ height: 100, marginBottom: 2 }}
						/>
						<Typography variant="subtitle1" gutterBottom>
							{partner.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{partner.description}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Partners;
