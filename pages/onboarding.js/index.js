import React from "react";
import OnBoardingForm from "@layouts/components/OnBoardingForm";
import Logo from "@layouts/components/Logo";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";

const OnBoarding = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <ThemeSwitcher />
      </div>
      <div className="rounded-lg border bg-white px-8 dark:bg-darkmode-body">
        <OnBoardingForm />
      </div>
    </div>
  );
};

export default OnBoarding;
