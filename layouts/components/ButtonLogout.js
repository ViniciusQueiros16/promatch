import React from "react";
import { Modal } from "@mui/material";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const LogoutModal = ({ open, onClose, onLogout }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <p>Are you sure you want to sign out?</p>
        <button onClick={onLogout}>Sign out</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

const ButtonLogout = ({ showModal, setShowModal }) => {
  // Receive showModal and setShowModal as props
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("authorization");
    setShowModal(false); // Close the modal
    router.push("/login");
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Logout</button>
      <LogoutModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default ButtonLogout;
