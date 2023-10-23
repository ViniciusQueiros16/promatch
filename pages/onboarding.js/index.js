import React from "react";
import OnBoardingForm from "@layouts/components/OnBoardingForm";
import Logo from "@layouts/components/Logo";

const OnBoarding = () => {
  return (
    <div className="container">
      <div className="rounded-lg border bg-white px-8">
        <div className="flex items-center justify-start border-b py-4">
          <Logo />
        </div>

        <OnBoardingForm />
      </div>
    </div>
  );
};

export default OnBoarding;
