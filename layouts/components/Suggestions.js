import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import ImageFallback from "./ImageFallback";
import Button from "@layouts/shortcodes/Button";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(4)].map((_, i) => ({
      id_user: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      company: faker.company.buzzPhrase(),
      id: i,
    }));
    setSuggestions(suggestions);
    //console.log(suggestions);
  }, []);

  return (
    <div className="hidden space-y-2 xl:inline">
      <div className="m-auto w-11/12 space-y-2 overflow-hidden rounded-lg border border-gray-300 bg-theme-light py-2.5 dark:border-none dark:bg-darkmode-body">
        <div className="nb-d-5 flex justify-between text-sm">
          <h3 className="m-2 text-sm font-bold text-gray-900">
            Add to your feed
          </h3>
        </div>
        {suggestions.map((profile, key) => (
          <div key={profile.id_user}>
            <div className="m-2 mb-3 flex items-center justify-between">
              <img
                className="h-10 w-10
          rounded-full border p-[2px]"
                src={profile.avatar}
                alt=""
              />
              <div className="ml-4 flex-1">
                <h2 className="text-sm font-semibold">{profile.username}</h2>
                <h3 className="text-xs text-gray-400">{profile.company}</h3>
              </div>
            </div>
            <div className="flex justify-center" key={profile.password}>
              <Button
                href="/contractors"
                type="outline"
                className="-mt-2 text-sm "
              >
                + Follow
              </Button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      {/* Ads */}
      <div className="sticky top-20 m-auto h-64 w-11/12 rounded-lg border border-gray-300 bg-theme-light px-2.5 dark:border-none  dark:bg-darkmode-body">
        <div className="relative h-full w-full">
          <ImageFallback
            src="/images/businessproposal.png"
            className=""
            width={300}
            height={300}
            alt="Ads"
          />
        </div>
      </div>
    </div>
  );
};
export default Suggestions;
