import React from "react";
import { getCookie } from "cookies-next";
import { SessionContextProvider } from "context/SessionContext";
import HomeHeader from "@layouts/components/HomeHeader";
import ProfileSide from "@layouts/components/ProfileSide";
import Feed from "@layouts/components/Feed";
import RightHandSide from "@layouts/components/RightHandSide";

const Contractors = () => {
  return (
    <SessionContextProvider>
      <>
        <HomeHeader />
        <div className="mx-auto mt-8 max-h-screen overflow-hidden lg:max-w-6xl">
          <main className="grid grid-cols-9 gap-x-4">
            <ProfileSide />
            <Feed />
            <RightHandSide />
          </main>
        </div>
      </>
    </SessionContextProvider>
  );
};

export default Contractors;

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
