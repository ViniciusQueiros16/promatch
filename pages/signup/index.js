import React from "react";
import AuthForm from "@layouts/components/AuthForm";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const Signup = () => {
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://6fk13vng11.execute-api.us-east-2.amazonaws.com/production/users",
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
        throw new Error(json);
      }

      setCookie("authorization", json.token);

      router.push("/contractors");
    } catch (error) {
      console.log(error);
      return { status: 500 };
    }
  };

  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <AuthForm title="Sign Up" fields={fields} onSubmit={onSubmit} signupPage />
  );
};

export default Signup;
