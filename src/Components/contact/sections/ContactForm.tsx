import React, { useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
	useMediaQuery,
	IconButton,
	CircularProgress,
} from "@mui/material";
import useContactForm from "../../../hooks/useContactForm"; // Importing custom hook
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

/**
 * Renders a form for users to submit their contact information.
 *
 * @returns {JSX.Element} The JSX code that renders the form component.
 */
const ContactForm: React.FC = () => {
	const formik = useContactForm();
	const isSmallScreen = useMediaQuery("(max-width: 760px)");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "failure"
	>("idle");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setStatus("loading");

		const formData = new FormData(e.currentTarget);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				setStatus("success");
				formik.resetForm();
			} else {
				setStatus("failure");
			}
		} catch (error) {
			setStatus("failure");
		}
	};

	return (
		<Paper
			elevation={3}
			sx={{
				borderRadius: "15px",
				padding: 3,
				width: isSmallScreen ? "100%" : "380px",
			}}
		>
			<Typography variant="h4" paddingY={3} textAlign="center">
				Get In Touch
			</Typography>
			<form onSubmit={handleSubmit}>
				<input
					type="hidden"
					name="access_key"
					value={process.env.REACT_APP_ACCESS_KEY}
				/>
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
					{status === "idle" || status === "loading" ? (
						<Button
							fullWidth
							variant="contained"
							type="submit"
							disabled={status === "loading"}
							sx={{
								py: 1.5,
								px: 6,
								borderRadius: "10px",
								background: "#8A2BE2",
								color: "white",
							}}
						>
							{status === "loading" ? (
								<CircularProgress size={24} color="inherit" />
							) : (
								"Submit"
							)}
						</Button>
					) : (
						<IconButton
							sx={{ color: status === "success" ? "green" : "error" }}
							aria-label={
								status === "success"
									? "submitted successfully"
									: "submission failed"
							}
						>
							{status === "success" ? <CheckIcon /> : <CloseIcon />}
						</IconButton>
					)}
				</Box>
			</form>
		</Paper>
	);
};

export default ContactForm;
