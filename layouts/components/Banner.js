import React from "react";
import ImageFallback from "./ImageFallback";
import Link from "next/link";

function Banner() {
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
          <div className="banner-title">
            <h1>Welcome !</h1>
            <span>to ProMatch</span>
          </div>
          <p className="mt-4">
            We bridge the gap between contractors and service providers,
            simplifying the hiring process for businesses and freelancers. Say
            goodbye to complex job applications and hello to easy matching. Join
            us and discover a new way to connect with the right opportunities or
            professionals.
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
