import { getCookie } from "cookies-next";

const Contractors = () => {
  return (
    <div>
      <h1>Hello Word!</h1>
    </div>
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
