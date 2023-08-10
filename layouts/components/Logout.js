import React from "react";
import { Modal } from "@mui/material";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const LogoutModal = ({ open, onClose, onLogout }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            onClick={onClose}
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to sign out?
            </h3>
            <button
              onClick={onLogout}
              data-modal-hide="popup-modal"
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-red-300 hover:bg-red-800 dark:focus:ring-red-800"
            >
              Sign out
            </button>
            <button
              onClick={onClose}
              data-modal-hide="popup-modal"
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Logout = ({ showModal, setShowModal }) => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("authorization");
    setShowModal(false);
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

export default Logout;
