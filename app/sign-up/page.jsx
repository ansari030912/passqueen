"use client";
import loginAuth from "../auth/LoginAuth";
import RegisterForm from "../components/Form/RegisterForm";

const page = () => {
  return <RegisterForm />;
};

export default loginAuth(page);
