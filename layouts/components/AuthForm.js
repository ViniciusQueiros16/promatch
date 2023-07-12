import React from "react";
import Image from "next/image";
import { Twitter, GitHub, Google } from "@mui/icons-material";
import Link from "next/link";
import logo from "/public/images/promatch-logo.png";
import Base from "@layouts/Baseof";
import ImageFallback from "layouts/components/ImageFallback";
import { useForm } from "react-hook-form";

const AuthForm = ({ title, fields, onSubmit, signupPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Base title={title}>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <ImageFallback
          className="-z-[1] object-cover object-top"
          src={"/images/login-background.jpg"}
          fill={true}
          alt="login-background"
          priority={true}
        />
        <div className="w-full rounded-md bg-body p-6 shadow-md dark:bg-darkmode-body lg:max-w-xl">
          <div className="flex justify-center">
            <Image src={logo} alt="Logo proposta" width={120} height={40} />
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6 px-8">
            {fields.map((field) => (
              <div className="mb-4" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block bg-body text-sm font-semibold dark:bg-darkmode-body"
                >
                  {field.label}
                </label>
                <input
                  {...register(field.name, { required: true })}
                  type={field.type}
                  id={field.name}
                  className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                />
                {errors[field.name] && <span>This field is required</span>}
              </div>
            ))}
            <div className="mt-2">
              <button
                className="btn btn-outline-primary w-full transform rounded-md px-4 py-2  tracking-wide"
                type="submit"
              >
                {title}
              </button>
            </div>
          </form>

          <div className="relative mt-6 flex w-full items-center justify-center border border-t">
            <div className="absolute bg-theme-light px-5 dark:bg-darkmode-body">
              Or
            </div>
          </div>
          <div className="mt-4 flex gap-x-2">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-gray-600 p-2 focus:ring-2 focus:ring-violet-600 focus:ring-offset-1"
            >
              <Google />
            </button>

            <button className="flex w-full items-center justify-center rounded-md border border-gray-600 p-2 focus:ring-2 focus:ring-violet-600 focus:ring-offset-1">
              <Twitter />
            </button>
            <button className="flex w-full items-center justify-center rounded-md border border-gray-600 p-2 focus:ring-2 focus:ring-violet-600 focus:ring-offset-1">
              <GitHub />
            </button>
          </div>
          {signupPage ? (
            <p className="mt-4 bg-body text-center text-sm dark:bg-darkmode-body">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>
            </p>
          ) : (
            <p className="mt-4 bg-body text-center text-sm dark:bg-darkmode-body">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          )}
        </div>
      </div>
    </Base>
  );
};

export default AuthForm;
