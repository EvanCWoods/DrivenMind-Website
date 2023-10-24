import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import DrivenMindLogo from "../assets/DrivenMindLogo.svg";

const navInfo = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "DrivenMind Platform",
		link: "/platform",
	},
	{
		title: "Ai Training",
		link: "/ai-training",
	},
	{
		title: "Contact",
		link: "/contact",
	},
];
const Footer = () => {
	const theme = useTheme(); // Get the theme from context
	return (
		<Box>
			<Grid container mt={6} mb={6} display="flex" justifyContent="center">
				<Divider sx={{ width: "90%" }} />
				<Grid
					mt={5}
					item
					xs={12}
					md={4}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Box>
						<Typography variant="h4">Driven Mind.ai</Typography>
						<Typography variant="h6" sx={{ mt: 3 }}>
							AI Enhanced Companies, <br /> Made Easy
						</Typography>
					</Box>
				</Grid>
				<Grid
					mt={5}
					item
					xs={12}
					md={4}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<img
						src={DrivenMindLogo}
						alt="DrivenMind Logo"
						style={{ height: "130px" }}
					/>
				</Grid>
				<Grid
					mt={5}
					item
					xs={12}
					md={4}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Box>
						{navInfo.map((item) => {
							return (
								<Box mb={2}>
									<a
										href={item.link}
										style={{ color: theme.palette.primary.main }}
									>
										<Typography variant="body1">{item.title}</Typography>
									</a>
								</Box>
							);
						})}
					</Box>
				</Grid>
				<Divider sx={{ width: "90%", mt: 4 }} />
			</Grid>
		</Box>
	);
};

export default Footer;
