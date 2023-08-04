import React from "react";
import { getCookie } from "cookies-next";
import HomeHeader from "@layouts/components/HomeHeader";
import ProfileSide from "@layouts/components/ProfileSide";
import Feed from "@layouts/components/Feed";
import RightHandSide from "@layouts/components/RightHandSide";

const Contractors = ({ session }) => {
  return (
    <>
      <HomeHeader />
      <div className="mx-auto mt-8 max-h-screen overflow-hidden lg:max-w-6xl">
        <main className="grid grid-cols-9 gap-x-4">
          <ProfileSide session={session} />
          <Feed session={session} />
          <RightHandSide session={session} />
        </main>
      </div>
    </>
  );
};

export default Contractors;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token Invalido!");

    const username = getCookie("user", { req, res });

    const sessionResponse = await fetch(
      `https://6fk13vng11.execute-api.us-east-2.amazonaws.com/production/users/profile?usernameOrEmail=${encodeURIComponent(
        username
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!sessionResponse.ok)
      throw new Error("Erro ao obter a sessão do usuário.");

    const session = await sessionResponse.json();

    return {
      props: {
        session,
      },
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
