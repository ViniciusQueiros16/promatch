import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, GitHub, Google } from "@mui/icons-material";
import logo from "/public/images/promatch-logo.png";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://inovacaosebraeminas.com.br/wp-content/uploads/2018/12/proposta-de-valor-como-elaborar-a-sua.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="w-full rounded-md bg-slate-900 p-6 shadow-md lg:max-w-xl">
          <div className="flex justify-center">
            <Image src={logo} alt="Logo proposta" width={120} height={40} />
          </div>
          <form className="mt-6 px-8">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                type="email"
                className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-white"
              >
                Password
              </label>
              <input
                type="password"
                className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              />
            </div>
            <Link
              href="/forget"
              className="text-xs text-blue-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-2">
              <button className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 focus:bg-gray-600 focus:outline-none hover:bg-gray-600">
                Sign In
              </button>
            </div>
          </form>

          <div className="relative mt-6 flex w-full items-center justify-center border border-t">
            {/* <div className="absolute bg-white px-5">Or</div> */}
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

          <p className="mt-4 text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
