import ScrollAnimationWrapper from "@layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@lib/utils/getScrollAnimation";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import ImageFallback from "./ImageFallback";

function Testimonials() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const testimonials = [
    {
      name: "John Doe",
      role: "Web Developer",
      avatarSrc: "/images/avatars/avatar-4.webp",
      testimonialText:
        "I've been using ProMatch for a while now, and it has greatly improved my workflow. It's an excellent platform for connecting with clients and finding new opportunities.",
    },
    {
      name: "Jane Smith",
      role: "Graphic Designer",
      avatarSrc: "/images/avatars/avatar-1.webp",
      testimonialText:
        "ProMatch has helped me expand my client base and grow my freelance business. The real-time location tracking feature is a game-changer for me.",
    },
    {
      name: "David Johnson",
      role: "Marketing Specialist",
      avatarSrc: "/images/avatars/avatar-2.webp",
      testimonialText:
        "I highly recommend ProMatch to anyone in the service industry. The chat functionality makes communication with clients easy and efficient.",
    },
    {
      name: "Emily Wilson",
      role: "Mobile App Developer",
      avatarSrc: "/images/avatars/avatar-3.webp",
      testimonialText:
        "ProMatch has been invaluable to my career. It's a versatile platform that connects professionals and clients seamlessly.",
    },
    {
      name: "Sarah Adams",
      role: "Project Manager",
      avatarSrc: "/images/avatars/avatar.webp",
      testimonialText:
        "As a project manager, ProMatch has made my job much smoother. It helps me keep track of my team's real-time locations and communicate effectively.",
    },
    {
      name: "John Doe",
      role: "Web Developer",
      avatarSrc: "/images/avatars/avatar-4.webp",
      testimonialText:
        "I've been using ProMatch for a while now, and it has greatly improved my workflow. It's an excellent platform for connecting with clients and finding new opportunities.",
    },
  ];

  return (
    <ScrollAnimationWrapper>
      <motion.div
        className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6"
        variants={scrollAnimation}
      >
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            See what our users say
          </h2>
        </div>
        <div className="gap-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
            >
              <div className="flex gap-4">
                <ImageFallback
                  className="h-12 w-12 rounded-full"
                  src={testimonial.avatarSrc}
                  alt={`user avatar - ${testimonial.name}`}
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-8">{testimonial.testimonialText}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}

export default Testimonials;
