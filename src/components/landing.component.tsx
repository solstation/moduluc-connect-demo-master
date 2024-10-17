import { NextPageWithLayout } from "src/types/next";

const LandingPage: NextPageWithLayout = () => {
  return (
    <>
      <div>You are not logged in.</div>
      <p>Please sign in or sign up</p>
    </>
  );
};

export default LandingPage;
