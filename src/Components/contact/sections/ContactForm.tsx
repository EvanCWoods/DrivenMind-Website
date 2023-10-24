import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import useContactForm from "../../../hooks/useContactForm"; // Importing custom hook

/**
 * Renders a form for users to submit their contact information.
 *
 * @returns {JSX.Element} The JSX code that renders the form component.
 */
const ContactForm: React.FC = () => {
	const formik = useContactForm();

	return (
		<Paper
			elevation={3}
			sx={{ borderRadius: "15px", padding: 3, maxWidth: "420px" }}
		>
			<Typography variant="h4" paddingY={3} textAlign="center">
				Get In Touch
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<TextField
							fullWidth
							id="firstName"
							name="firstName"
							label="First Name"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							error={
								formik.touched.firstName && Boolean(formik.errors.firstName)
							}
							// helperText={formik.touched.firstName && formik.errors.firstName}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							id="lastName"
							name="lastName"
							label="Last Name"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							// helperText={formik.touched.lastName && formik.errors.lastName}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							id="company"
							name="company"
							label="Company"
							value={formik.values.company}
							onChange={formik.handleChange}
							error={formik.touched.company && Boolean(formik.errors.company)}
							// helperText={formik.touched.company && formik.errors.company}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
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
							id="phone"
							name="phone"
							label="Phone"
							value={formik.values.phone}
							onChange={formik.handleChange}
							error={formik.touched.phone && Boolean(formik.errors.phone)}
							// helperText={formik.touched.phone && formik.errors.phone}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							multiline
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
