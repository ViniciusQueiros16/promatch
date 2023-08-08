import React, { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import AuthForm from "@layouts/components/AuthForm";
import api from "services/api";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    try {
      const response = await api.post("login", data);

      if (response.status === 201) {
        setCookie("authorization", response.data.Token, {
          maxAge: 60 * 60 * 1, // 1 hour
        });
        router.push("/contractors");
      } else {
        const json = response.data;
        throw new Error(json.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fields = [
    { name: "usernameOrEmail", label: "Username or email address", type: "text" },
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
