import React from "react";
import AuthForm from "@layouts/components/AuthForm";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://6fk13vng11.execute-api.us-east-2.amazonaws.com/production/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();

      if (response.status !== 201) {
        throw new Error(json.error);
      }

      setCookie("authorization", json.token);

      router.push("/contractors");
    } catch (error) {
      setError(error.message);
    }
  };

  const fields = [
    { name: "usernameOrEmail", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <AuthForm title="Login" fields={fields} onSubmit={onSubmit} error={error} />
  );
};

export default Login;
