import Tabs from "@layouts/shortcodes/Tabs";
import { Avatar, Icon, TextareaAutosize } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "context/SessionContext";
import { ReplyOutlined } from "@mui/icons-material";

const Advertise = () => {
  const session = useContext(SessionContext);
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="advertise-container">
      <div className="container-header">
        <div className="profile">
          <div className="img-container">
            <Avatar
              src={
                session.user?.avatar
                  ? session.user?.avatar
                  : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
              }
            />
          </div>
          <h4>{session.user?.username}</h4>
        </div>
        <Icon
          as={ReplyOutlined}
          cursor="pointer"
          className="m-4 text-green-500"
        />
      </div>

      <div className="advertise-tabs">
        <Tabs>
          <div name="Find">
            <label htmlFor="searchType">
              Are you looking for clients or professionals?
            </label>
            <select className="rounded dark:text-gray-500" id="searchType">
              <option value="clients">Clients</option>
              <option value="professionals">Professionals</option>
            </select>
          </div>
          <div name="ServiceType">
            <label htmlFor="serviceType">
              What type of service are you needing?
            </label>
            <input
              type="text"
              id="serviceType"
              placeholder="Enter service type"
              className="rounded"
            />
          </div>
          <div name="Description">
            <label htmlFor="description">Detail your order:</label>
            <TextareaAutosize
              id="description"
              minRows={3}
              placeholder="Enter description"
              style={{ width: "100%" }}
              className="rounded"
            />

            <label htmlFor="keywords">Add Keywords: </label>
            <input
              className="rounded"
              type="text"
              id="keywords"
              placeholder="Enter keywords"
            />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Advertise;
