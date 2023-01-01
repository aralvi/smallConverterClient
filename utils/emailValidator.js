const EmailValidator = (email) => {
  const regex = new RegExp(/\S+@\S+\.\S+/);
  return regex.test(email);
};

export default EmailValidator;
