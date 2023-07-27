import { getCookie } from "cookies-next";
import { faker } from "@faker-js/faker"; // Import faker library correctly
import Feed from "@layouts/components/Feed";
import ProfileSide from "@layouts/components/ProfileSide";
import RightHandSide from "@layouts/components/RightHandSide";
import HomeHeader from "@layouts/components/HomeHeader";

const Contractors = ({ session }) => {
  return (
    <>
      <HomeHeader />
      <div className="mx-auto mt-8 max-h-screen overflow-hidden lg:max-w-6xl">
        <main className="grid grid-cols-9">
          <ProfileSide session={session} />
          <Feed session={session} />
          <RightHandSide session={session} />
        </main>
      </div>
    </>
  );
};

export default Contractors;

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token Invalido!");

    // Generate fake user session data using faker
    const session = {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      // company: faker.company.bs(),
      // id: i,
    };

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
};
