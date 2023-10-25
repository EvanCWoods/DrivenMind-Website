import React from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
	useMediaQuery,
} from "@mui/material";
import useContactForm from "../../../hooks/useContactForm"; // Importing custom hook

/**
 * Renders a form for users to submit their contact information.
 *
 * @returns {JSX.Element} The JSX code that renders the form component.
 */
const ContactForm: React.FC = () => {
	const formik = useContactForm();
	const isSmallScreen = useMediaQuery("(max-width: 760px)");

	return (
		<Paper
			elevation={3}
			sx={{
				borderRadius: "15px",
				padding: 3,
				width: isSmallScreen ? "100%" : "420px",
			}}
		>
			<Typography variant="h4" paddingY={3} textAlign="center">
				Get In Touch
			</Typography>
			<form action="https://api.web3forms.com/submit" method="POST">
				<input
					type="hidden"
					name="access_key"
					value="4bb7a909-f4de-45b6-ab20-23bf7f51e996"
				/>

				{/* <input type="text" name="name" required />
				<input type="email" name="email" required />
				<textarea name="message" required></textarea>
				<div className="h-captcha" data-captcha="true"></div>
				<button type="submit">Submit Form</button>
			</form> */}
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							type="text"
							id="name"
							name="name"
							label="Full Name"
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
							// helperText={formik.touched.lastName && formik.errors.lastName}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							type="email"
							id="email"
							name="email"
							label="Email"
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							// helperText={formik.touched.email && formik.errors.email}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							multiline
							type="text"
							rows={4}
							id="message"
							name="message"
							label="Message"
							value={formik.values.message}
							onChange={formik.handleChange}
						/>
					</Grid>
				</Grid>
				<Box paddingTop={4} display="flex" justifyContent="center">
					<Button
						fullWidth
						variant="contained"
						type="submit"
						sx={{
							py: 1.5,
							px: 6,
							borderRadius: "10px",
							background: "#8A2BE2",
							color: "white",
						}}
					>
						Submit
					</Button>
				</Box>
			</form>
		</Paper>
	);
};

export default ContactForm;
