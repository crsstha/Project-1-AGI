export default function regValidation(values) {
  let errors = {};
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.firstName.trim()) {
    errors.firstName = "*First Name requried!";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "*Last Name requried!";
  }
  if (!values.dob.trim()) {
    errors.dob = "*Date of Birth requried!";
  }

  if (!values.username.trim()) {
    errors.username = "*Username requried!";
  }

  if (!values.email) {
    errors.email = "*Email required";
  } else if (!re.test(values.email)) {
    errors.email = "*Email Address is Invalid";
  }
  if (!values.password) {
    errors.password = "*Password is required";
  } else if (values.password.length < 6) {
    errors.password = "*Password needs to 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "*Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "*Password do not match";
  }
  return errors;
}
