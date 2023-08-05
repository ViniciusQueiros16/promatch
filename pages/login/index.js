import React, { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import AuthForm from "@layouts/components/AuthForm";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const apiUrl =
    "https://6fk13vng11.execute-api.us-east-2.amazonaws.com/production/login";

  const handleLogin = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error);
      }

      setCookie("authorization", json.Token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

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
    <AuthForm
      title="Login"
      fields={fields}
      onSubmit={handleLogin}
      error={error}
    />
  );
};

export default Login;
