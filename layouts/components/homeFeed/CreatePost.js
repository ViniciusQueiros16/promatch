import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Icon,
  Modal,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { BsChevronDown, BsFillPeopleFill, BsTwitter } from "react-icons/bs";
import { MdGroupAdd, MdGroups2, MdGroups3, MdPublic } from "react-icons/md";
import useSelectFile from "@hooks/useSelectFile";
import ModalFooterIcon from "./ModalFooterIcon";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { SessionContext } from "context/SessionContext";
import api from "services/api";

const CreatePost = ({ open, onClose, speed }) => {
  const session = useContext(SessionContext);
  const [communityType, setCommunityType] = useState("AnyOne");
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState({ title: "", body: "" });
  const [anchorEl, setAnchorEl] = useState(null);

  const onCommunityTypeChange = (event) => {
    const selectedCommunityType = event.target.name;
    setCommunityType(selectedCommunityType);
    handleClosePopover();
  };

  const handleHashTag = () => {
    setTextInput((prev) => ({
      ...prev,
      body: prev.body + "#",
    }));
  };

  const handleCreatePost = async () => {
    setLoading(true);
    try {
      const data = {
        user_id: session.user.user_id,
        message: textInput.body,
        community_type: communityType,
      };
      if (selectedFile) {
        const base64Data = selectedFile.split(",")[1]; // Extract base64 data after command
        data.image_url = base64Data;
      }

      const response = await api.post("post", data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    textInput.body = "";
    setSelectedFile("");
    setCommunityType("AnyOne");
    onClose();
  };

  const onTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setTextInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Modal open={open} onClose={onClose} size="lg">
      <Box
        className="shadow-24 absolute left-1/2 top-1/3 w-4/6 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-4 dark:bg-darkmode-body"
        maxWidth="800px"
      >
        <Box className="text-24  flex flex-col items-center">
          <Typography className="mt-2 text-xl font-bold text-gray-800">
            Create a Post
          </Typography>
        </Box>

        <Box className="flex-start m-4 flex flex-col gap-2">
          <Box className="flex items-center">
            <Avatar
              name={session.user?.name}
              src={
                session.user?.avatar
                  ? session.user?.avatar
                  : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
              }
            />
            <Typography className="ml-2 font-bold text-gray-600">
              {session.user?.name}
            </Typography>
          </Box>
          <div>
            <Button
              onClick={handleOpenPopover}
              className="-mt-2 rounded-full border border-gray-500 bg-transparent px-4 py-0.5 text-sm font-bold text-gray-600 hover:bg-gray-200"
            >
              {communityType === "AnyOne" ? (
                <Icon as={MdPublic} className="mr-1 text-lg" />
              ) : (
                <Icon
                  as={communityType === "Twitter" ? MdPublic : BsFillPeopleFill}
                  className="mr-1 text-lg"
                />
              )}
              {communityType ? communityType : "AnyOne"}
              <Icon
                as={BsChevronDown}
                className="ml-2 animate-bounce text-center text-sm"
              />
            </Button>
            <Popover
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Stack spacing={2} className="m-5">
                <Typography className="flex items-center justify-center">
                  Who can see your post?
                </Typography>
                <hr className="my-2 border-t border-gray-700" />
                <Box display="flex" alignItems="center">
                  <Icon as={MdPublic} />
                  <Stack gap={0} className="m-2">
                    <Typography variant="body1" className="font-semibold">
                      AnyOne
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Anyone can view, post and comment to this community
                    </Typography>
                  </Stack>
                  <Checkbox
                    name="AnyOne"
                    checked={communityType === "AnyOne"}
                    onChange={onCommunityTypeChange}
                  ></Checkbox>
                </Box>
                <hr className="my-2 border-t border-gray-300" />
                <Box display="flex" alignItems="center">
                  <Icon
                    as={BsTwitter}
                    color="gray.500"
                    mr={2}
                    ml={3}
                    style={{ fontSize: "30px" }}
                  />
                  <Stack gap={0} className="m-2">
                    <Typography fontSize="12pt" fontWeight={600}>
                      AnyOne + Twitter
                    </Typography>
                    <Typography fontSize="8pt" color="gray.500">
                      Anyone can view, post and comment to this community
                    </Typography>
                  </Stack>
                  <Checkbox
                    name="Twitter"
                    checked={communityType === "Twitter"}
                    onChange={onCommunityTypeChange}
                    alignItems="end"
                  ></Checkbox>
                </Box>
                <hr className="my-2 border-t border-gray-300" />
                <Box display="flex" alignItems="center">
                  <Icon
                    as={MdGroupAdd}
                    color="gray.500"
                    mr={2}
                    ml={3}
                    style={{ fontSize: "30px" }}
                  />
                  <Stack gap={0} className="m-2">
                    <Typography fontSize="12pt" fontWeight={600}>
                      Connection Only
                    </Typography>
                    <Typography fontSize="8pt" color="gray.500">
                      Anyone can view, post and comment to this community
                    </Typography>
                  </Stack>
                  <Checkbox
                    name="Connection"
                    checked={communityType === "Connection"}
                    onChange={onCommunityTypeChange}
                  ></Checkbox>
                </Box>
                <hr />
                <Box display="flex" alignItems="center">
                  <Icon
                    as={MdGroups3}
                    color="gray.500"
                    mr={2}
                    ml={3}
                    style={{ fontSize: "30px" }}
                  />
                  <Stack gap={0} className="m-2">
                    <Typography fontSize="12pt" fontWeight={600}>
                      Group Members
                    </Typography>
                    <Typography fontSize="8pt" color="gray.500">
                      Anyone can view, post and comment to this community
                    </Typography>
                  </Stack>

                  <Checkbox
                    name="Group"
                    checked={communityType === "Group"}
                    onChange={onCommunityTypeChange}
                  ></Checkbox>
                </Box>
                <hr />
              </Stack>
            </Popover>
          </div>
        </Box>

        <hr />

        <Box className="p-3">
          <Box className="flex flex-col py-4">
            <TextareaAutosize
              name="body"
              className="h-32 rounded-md bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              value={textInput.body}
              onChange={onTextChange}
              placeholder="What do you want to talk about?"
            />
          </Box>
          <Button
            onClick={handleHashTag}
            className="btn btn-primary bg-blue-400 p-0.5 px-1.5 text-xs"
          >
            Add hashtag
          </Button>
        </Box>

        <Box className="bord rounded ">
          <Box className="flex flex-1">
            <ModalFooterIcon
              communityType={communityType}
              selectedFile={selectedFile}
              onSelectedImage={onSelectedFile}
              setSelectedFile={setSelectedFile}
            />
          </Box>
          <Box className="buttons flex p-4">
            <Button
              className="btn btn-outline-primary ml-auto border-primary p-1 px-4  hover:text-blue-700 "
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="btn btn-primary ml-3 border-primary px-5 py-2  hover:text-blue-700 "
              onClick={handleCreatePost}
              disabled={!textInput.body}
              isLoading={loading}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
export default CreatePost;
