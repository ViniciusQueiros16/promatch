import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import ImageFallback from "./ImageFallback";
import { Rating } from "@mui/material";

const Highlights = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState(2);

  useEffect(() => {
    const suggestionsData = [...Array(4)].map((_, i) => ({
      user_id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      company: faker.company.buzzPhrase(),
      jobType: faker.person.jobType(),
      id: i,
    }));
    setSuggestions(suggestionsData);
  }, []);

  return (
    <div className="hidden md:col-span-1 xl:inline-grid">
      <div className="hidden space-y-2 xl:inline">
        <div className="m-auto w-auto space-x-4 space-y-2 overflow-hidden rounded-lg border border-gray-300 bg-theme-light py-2.5 dark:border-none dark:border-yellow-200 dark:bg-darkmode-body">
          <div className="nb-d-5 flex justify-center text-sm">
            <h2 className="m-2 text-sm font-bold text-gray-900">Highlights</h2>
          </div>
          {suggestions.map((profile) => (
            <div key={profile.user_id} className="mx-2">
              <div className="m-2 mb-3 flex flex-row items-center justify-between">
                <img
                  className="h-16 w-16 rounded-full border p-[2px]"
                  src={profile.avatar}
                  alt=""
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center gap-x-4">
                    <h2 className="text-sm font-semibold">
                      {profile.username}
                    </h2>
                    <button className="btn-outline-primary ml-auto h-8 border p-2 text-center text-xs">
                      Show
                    </button>
                  </div>
                  <h3 className="text-xs text-gray-400">{profile.jobType}</h3>
                  <div className="flex items-center gap-x-4">
                    <Rating value={value} readOnly className="text-lg" />
                    <div className="text-xs font-bold text-gray-400">
                      <p>Price per hour:</p>
                      <h2 className="text-sm font-semibold">MX$ 531,81</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-4 flex gap-x-4 pb-4 text-xs">
                <p>
                  Rating:<span className="font-bold">2</span>
                </p>
                <p>
                  Completed projects:<span className="font-bold">323</span>
                </p>
                <p>
                  Recommendations:<span className="font-bold">329</span>
                </p>
              </div>
              <div className="mx-2 border-t border-gray-300 dark:border-gray-700"></div>
            </div>
          ))}
        </div>
        {/* Ads */}
        {/* <div className="sticky top-20 m-auto w-11/12 rounded-lg border border-gray-300 bg-theme-light px-2.5 dark:border-none dark:bg-darkmode-body">
          <ImageFallback
            src="/images/adsense.png"
            className="items-center"
            width={250}
            height={250}
            alt="Ads"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Highlights;
