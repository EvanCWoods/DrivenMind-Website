import React from "react";
import { Box, Grid } from "@mui/material";
import ContactInformation from "./sections/ContactInformation";
import ContactForm from "./sections/ContactForm";

// TODO: Figure out a way to center both items vertically the same
/**
 * Renders a contact page with contact information and a contact form.
 *
 * @returns {JSX.Element} The JSX element representing the contact page.
 */
const ContactPage = () => {
  return (
    <Box>
      <Grid container pb={15} pt={4}>
        {/* Left Side - Contact Information */}
        <Grid item xs={12} lg={7}>
          <ContactInformation />
        </Grid>
        {/* Right Side - Form */}
        <Grid item xs={12} lg={5} display="flex" justifyContent="center">
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
