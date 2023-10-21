import { Formik, Field, ErrorMessage } from "formik";
import { basicSchema } from "./schemas/basicSchema";
import { useState } from "react";
import Card from "./Components/Card";

import "./styles.scss";
function App() {
  const [registrations, setRegistrations] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (values) => {
    setRegistrations([...registrations, values]);
    setIsSubmitted(true);
  };

  return (
    <div className="app">
      <Formik
        initialValues={{
          pet_name: "",
          pet_age: "",
          gender: "",
          date: "",
          owner_name: "",
        }}
        validationSchema={basicSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleSubmit }) => (
          <form
            autoComplete="off"
            className="form-card"
            onSubmit={handleSubmit}
          >
            <label htmlFor="pet_name">The Pet Name</label>
            <Field
              type="text"
              id="pet_name"
              name="pet_name"
              placeholder="Pet Name"
            />
            <ErrorMessage
              name="pet_name"
              component="div"
              className="error-message"
            />
            <label htmlFor="pet_age">The Pet Age</label>
            <Field
              type="number"
              id="pet_age"
              name="pet_age"
              placeholder="Pet's Age"
            />
            <ErrorMessage
              name="pet_age"
              component="div"
              className="error-message"
            />
            <label htmlFor="gender">Pet Gender</label>
            <Field as="select" id="gender" name="gender">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="error-message"
            />

            <label htmlFor="date">Date of appointment</label>
            <Field type="date" id="date" name="date" placeholder="Date" />
            <ErrorMessage
              name="date"
              component="div"
              className="error-message"
            />
            <label htmlFor="owner_name">Owner name</label>
            <Field
              type="text"
              id="owner_name"
              name="owner_name"
              placeholder="Owner's name"
            />
            <ErrorMessage
              name="owner_name"
              component="div"
              className="error-message"
            />
            <button type="submit">Registration</button>
          </form>
        )}
      </Formik>
      {isSubmitted && (
        <section className="section">
          {registrations.map((registration, index) => (
            <Card key={index} registration={registration} />
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
