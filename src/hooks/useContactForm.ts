import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	company: yup.string().required("Company is required"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	phone: yup.string().required("Phone number is required"),
	message: yup.string(),
});

const useContactForm = () => {
	return useFormik({
		initialValues: {
			name: "",
			company: "",
			email: "",
			phone: "",
			message: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values: any) => {
			// TODO: Create a function and call it here to send the data to the API
			console.log(values);
		},
	});
};

export default useContactForm;
