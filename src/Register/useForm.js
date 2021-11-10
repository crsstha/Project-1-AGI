import { useState, useEffect } from "react";
//import regValidation from "./regValidation";

const useForm = (regValidation) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  console.log(values);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(regValidation(values));
    setIsSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
