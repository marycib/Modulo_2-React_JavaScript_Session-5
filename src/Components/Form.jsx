import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const Form = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      pet_name: "",
      pet_age: "",
      gender: "",
      date: "",
      owner_name: "",
    },
    validationSchema={basicSchema}
    onSubmit={handleFormSubmit}
  });

  return (
    <form autoComplete="off" className="form-card">
      <label htmlFor="pet_name">The Pet Name</label>
      <input
        id="pet_name"
        type="text"
        placeholder="Pet Name"
        value={values.pet_name}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor="pet_age">The Pet Age</label>

      <input
        id="pet_age"
        type="number"
        placeholder="Pet's Age"
        value={values.pet_age}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="gender">Pet Gender</label>
      <Field as="select" id="gender" name="gender">
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Field>

      <label htmlFor="date">Date of appointment</label>
      <input
        id="date"
        type="date"
        placeholder="Date"
        value={values.date}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor="owner_name">Owner name</label>
      <input
        id="owner_name"
        type="text"
        placeholder="owner's name"
        value={values.owner_name}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type="submit">Registration</button>
    </form>
  );
};

export default Form;
