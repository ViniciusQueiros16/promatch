import React, { useState } from "react";
import AuthForm from "@layouts/components/AuthForm";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import api from "services/api";

const Signup = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await api.post("users", data);
      const json = response.data;

      if (response.status !== 201) {
        throw new Error(json.error);
      }

      setCookie("authorization", json.token);

      router.push("/onboarding");
    } catch (error) {
      setError(error.message + " Unable to register. Try again!");
    }
  };

  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <AuthForm
      title="Sign Up"
      fields={fields}
      onSubmit={onSubmit}
      error={error}
      signupPage
    />
  );
};

export default Signup;
