import React from "react";
import { getCookie } from "cookies-next";
import { SessionContextProvider } from "context/SessionContext";
import HomeHeader from "@layouts/components/homeFeed/HomeHeader";

const ContractorsLayoutBase = ({ children }) => {
  return (
    <SessionContextProvider>
      <>
        <HomeHeader />

        <main>{children}</main>
      </>
    </SessionContextProvider>
  );
};

export default ContractorsLayoutBase;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token Invalido!");

    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
}
