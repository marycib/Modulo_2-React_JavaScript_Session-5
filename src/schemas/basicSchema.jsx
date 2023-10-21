import * as yup from "yup";
 export const basicSchema = yup.object().shape({
  pet_name: yup
    .string()
    .test("petName", "Pet name is required", function (value) {
      return value !== undefined && value.trim() !== "";
    }),
  pet_age: yup
    .number()
    .typeError("Pet's age must be a number")
    .integer("Pet's age must be an integer")
    .min(0, "Pet's age must be greater than or equal to 0")
    .max(100, "Pet's age must be less than or equal to 100")
    .required("Pet's age is required"),
  gender: yup
    .string()
    .oneOf(["Male", "Female"], "Please select a valid gender")
    .required("Pet's gender is required"),
  date: yup.date().required("You must select a date"),
  owner_name: yup
    .string()
    .trim()
    .required("Owner's name is required")
    .min(2, "Owner's name must be at least 2 characters")
    .max(50, "Owner's name must be at most 50 characters"),
});