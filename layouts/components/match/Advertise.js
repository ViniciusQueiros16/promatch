import { Button } from "@mui/material";
import React, { useState } from "react";


const Advertise = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="advertise-container">
     

      <div>
        <Button className="option" onClick={() => setClickedUser(null)}>
        advertise
        </Button>
        <Button className="option" disabled={!clickedUser}>
        advertise
        </Button>
      </div>

    
    </div>
  );
};

export default Advertise;
