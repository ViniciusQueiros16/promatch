import React, { useEffect, useState } from "react";
import ImageFallback from "../ImageFallback";
import Link from "next/link";

function Banner() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [showProMatch, setShowProMatch] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    setTimeout(() => {
      setShowTo(true);
    }, 2000);

    setTimeout(() => {
      setShowProMatch(true);
    }, 3000);
  }, []);
  return (
    <section className="relative h-screen">
      <ImageFallback
        className="absolute left-0 z-[-1] mt-[2%] h-full w-full "
        src={"/images/handshake-bg-banner.svg"}
        width={200}
        height={200}
        alt="banner-shape"
        priority
      />

      <div className="flex h-screen items-center justify-center">
        <div className="mt-[-20%] text-center lg:col-4">
          <div style={{ textShadow: "-4px 3px 2px rgba(0, 0, 0, 0.4)" }}>
            {showWelcome && (
              <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-5xl font-bold text-transparent">
                Welcome
              </h1>
            )}
            {showTo && (
              <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-6xl font-bold text-transparent">
                to
              </h1>
            )}
            {showProMatch && (
              <div className="flex items-center justify-center ">
                  <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-8xl font-bold text-transparent">ProMatch</h1>
                <h1 className="animate-bounce bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-8xl font-bold text-transparent">!</h1>
              </div>
            )}
          </div>

          <p className="mt-2 font-sans text-xl font-bold dark:text-gray-300">
            We bridge the gap between contractors and service providers,
            simplifying the hiring process for businesses and freelancers. Say
            goodbye to complex job applications and hello to easy matching.
          </p>

          <Link className="btn btn-primary mt-6" href="/about" rel="">
            Know About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
