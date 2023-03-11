import * as yup from "yup";

const emailRule = yup
  .string("Enter your email")
  .email("Enter a valid email")
  .trim()
  .required("Email is required");

const passwordRule = yup
  .string("Enter your Password")
  .trim()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.[{}()"%/,><':;|_~`+=]).{8,}$/,
    "A minimum of 8 characters with a combination of uppercase and lowercase letters, numbers and special characters is required."
  );
const fullNameRule = yup
  .string("Full Name is Required")
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .trim()
  .required("Full Name is Required");

const SignUpSchema = yup.object({
  email: emailRule,
  password: passwordRule,
  fullName: fullNameRule,
});
export default SignUpSchema;
