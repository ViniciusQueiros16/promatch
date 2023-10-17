import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const ProfileDetails = ({ profile }) => {
  return (
    <div key={profile?.user_id} className="mx-2">
      <div className="m-2 flex flex-grow items-center ">
        <img
          className="h-16 w-16 rounded-full border p-[2px]"
          src={profile?.avatar}
          alt=""
        />
        <div className="ml-4 mt-6 flex-1">
          <div className="flex items-center gap-x-4">
            <h2 className="text-sm font-semibold">{profile?.username}</h2>
            <button className="btn-outline-primary ml-auto h-8 border p-2 text-center text-xs">
              Show
            </button>
          </div>
          <h3 className="text-xs text-gray-400">{profile?.jobType}</h3>
          <div className="flex items-center gap-x-4">
            <Rating value={profile?.rating} readOnly className="text-lg" />
            <div className="text-xs font-bold text-gray-400">
              <p>Price per hour:</p>
              <h2 className="text-sm font-semibold">MX$ 531,81</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 flex gap-x-4 pb-4 text-xs">
        <p>
          Rating:<span className="font-bold">355</span>
        </p>
        <p>
          Completed projects:<span className="font-bold">323</span>
        </p>
        <p>
          Recommendations:<span className="font-bold">329</span>
        </p>
      </div>
    </div>
  );
};

const Feedback = ({ feedback }) => {
  return (
    <div key={feedback.username} className="mb-4">
      <div className="flex items-center gap-2">
        <Typography variant="body1">{feedback.username}</Typography>
        <Rating value={feedback.rating} readOnly className="text-lg" />
      </div>
      <Typography variant="body2">{feedback.text}</Typography>
      <Divider className="mt-4" />
    </div>
  );
};

const RatingDisplay = () => {
  const [profile, setProfile] = useState(null);
  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    const user = {
      user_id: faker.string.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      company: faker.company.buzzPhrase(),
      jobType: faker.person.jobType(),
      rating: faker.number.int(),
    };
    setProfile(user);

    const clients = [
      {
        username: faker.internet.userName(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        rating: faker.number.int(),
      },
      {
        username: faker.internet.userName(),
        text: "Aenean porttitor vehicula ante quis posuere. Nullam ut ligula eget felis cursus eleifend.",
        rating: 4,
      },
      {
        username: faker.internet.userName(),
        text: "Maecenas dictum odio non justo iaculis, quis accumsan turpis laoreet.",
        rating: 5,
      },
      {
        username: faker.internet.userName(),
        text: "Vestibulum eu est ut arcu gravida ullamcorper. Fusce eu libero justo.",
        rating: 2,
      },
    ];
    setFeedbacks(clients);
  }, []);

  return (
   
      <div className="flex flex-grow border-l-2">
        <div className="w-2/5 px-5 dark:bg-darkmode-body">
          <ProfileDetails profile={profile} />
          <div className="w-80">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Ratings by customers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {feedbacks &&
                    feedbacks.map((feedback) => (
                      <Feedback key={feedback.username} feedback={feedback} />
                    ))}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
   
  );
};

export default RatingDisplay;
