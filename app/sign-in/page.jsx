"use client";
import React from "react";
import LoginForm from "../components/Form/LoginForm";
import loginAuth from "../auth/LoginAuth";

const page = () => {
  return <LoginForm />;
};

export default loginAuth(page);
