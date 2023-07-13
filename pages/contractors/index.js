import { getCookie } from "cookies-next";
import Feed from "@layouts/components/feed";

const Contractors = () => {
  return (
   <Feed></Feed>
  );
};

export default Contractors;

export const getServerSideProps = async ({ req, res }) => {
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
};
