import React, { useState } from "react";
import Tabs from "@layouts/shortcodes/Tabs";
import { TextareaAutosize } from "@mui/material";
import AdvertiseHeader from "./AdvertiseHeader";

const Advertise = () => {
  const [isContainerCollapsed, setIsContainerCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsContainerCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div>
      <div className={`${isContainerCollapsed ? "collapsed" : ""}`}>
        
        <AdvertiseHeader
          onCollapseToggle={handleToggleCollapse}
          isCollapsed={isContainerCollapsed}
        />

        <div className="advertise-tabs-container">
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

      {isContainerCollapsed && (
        <div className="collapsed-content">
          <AdvertiseHeader
            onCollapseToggle={handleToggleCollapse}
            isCollapsed={isContainerCollapsed}
          />
        </div>
      )}
    </div>
  );
};

export default Advertise;
