import useSelectFile from "@hooks/useSelectFile";
import {
  Modal,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SessionContext } from "context/SessionContext";
import { getCookie } from "cookies-next";
import React, { useContext } from "react";
import api from "services/api";

function EditProfile({ open, onClose }) {
  const session = useContext(SessionContext);
  const [birthdate, setBirthdate] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [gender, setGender] = React.useState("");
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();

  const handleSave = async () => {
    const token = getCookie("authorization");
    const data = {
      birthdate: birthdate,
      company: company,
      gender: gender,
    };

    if (selectedFile) {
      const base64Data = selectedFile.split(",")[1]; // Extract base64 data after command
      data.avatar = base64Data;
    }

    const response = await api.put(`profile?token=${token}`, data);
    console.log(response);
    onClose();
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className="shadow-24 absolute left-1/2 top-1/3 w-3/4 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-4 dark:bg-darkmode-body md:w-2/4 lg:w-1/4">
          <h2 className="mb-4 text-xl">Edit Profile</h2>
          <form>
            <div className="mb-4">
              {session.user?.avatar && (
                <img
                  src={session.user?.avatar}
                  alt="Avatar"
                  className="mx-auto mb-2 h-20 w-20 rounded-full"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={onSelectedFile}
                className="hidden"
                id="avatar-upload-input"
              />
              <label
                htmlFor="avatar-upload-input"
                className="hover:bg-primary-dark cursor-pointer rounded-full bg-primary px-4 py-2 text-white transition duration-300"
              >
                {session.user?.avatar ? "Change Avatar" : "Upload Avatar"}
              </label>
            </div>
            <TextField
              label="UserName"
              fullWidth
              value={session.user?.username}
              disabled
              margin="normal"
            />
            <TextField
              label="Name"
              fullWidth
              value={session.user?.name}
              disabled
              margin="normal"
            />
            <TextField
              label="Email"
              fullWidth
              value={session.user?.email}
              disabled
              margin="normal"
            />
            <TextField
              label="Birthdate"
              fullWidth
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Company"
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              className=" btn-primary"
              onClick={handleSave}
            >
              Save
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditProfile;
