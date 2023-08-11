import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Icon,
  Menu,
  MenuList,
  Modal,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { BsChevronDown, BsFillPeopleFill } from "react-icons/bs";
import { MdGroupAdd, MdPublic } from "react-icons/md";
import useSelectFile from "@hooks/useSelectFile";
import { SessionContext } from "context/SessionContext";
import ModalFooterIcon from "./ModalFooterIcon";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { MenuButton } from "@mui/base";

const CreatePost = ({ open, onClose, speed }) => {
  const user = useContext(SessionContext);
  const [communityType, setCommunityType] = useState("AnyOne");
  const [hashtag, setHashtag] = useState("");
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState({ title: "", body: "" });

  const onCommunityTypeChange = (event) => {
    setCommunityType(event.target.name);
  };

  const handleHashTag = () => {
    setHashtag("#");
  };

  const handleCreateCommunity = async () => {
    setLoading(true);
 

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

  return (
    <Modal open={open} onClose={onClose} size="lg">
      <Box className="shadow-24 absolute left-1/2 top-1/2 w-5/6 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-4 dark:bg-darkmode-body md:w-96">
        <div className="text-24  flex flex-col items-center">
          <Typography className="mt-2 text-xl font-bold text-gray-800">
            Create a Post
          </Typography>
        </div>

        <Box className="flex-start m-4 flex flex-col gap-2">
          <div className="flex items-center">
            <Avatar
              name={user?.name}
              src={
                user?.avatar
                  ? user?.avatar
                  : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
              }
            />
            <Typography className="ml-2 font-bold text-gray-600">
              {user?.name}
            </Typography>
          </div>
          <Menu closeOnSelect={false}>
            <MenuButton className="-mt-2 rounded-full border border-gray-500 bg-transparent  px-4 py-0.5 text-sm font-bold text-gray-600 hover:bg-gray-200">
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
            </MenuButton>
            <MenuList minWidth="400px">
              <Stack spacing={2} className="m-5">
                <Typography>Who can see your post?</Typography>
                <hr className="my-2 border-t border-gray-700" />
                <Checkbox
                  name="AnyOne"
                  isChecked={communityType === "AnyOne"}
                  onChange={onCommunityTypeChange}
                >
                  <Box align="center" className="flex items-center">
                    <Icon
                      as={MdPublic}
                      className="ml-3 mr-2 bg-gray-500 text-2xl"
                    />
                    <Stack gap={0} className="m-2">
                      <Typography className="text-md font-semibold">
                        AnyOne
                      </Typography>
                      <Typography className="text-xs text-gray-500">
                        Anyone can view, post and comment to this community
                      </Typography>
                    </Stack>
                  </Box>
                </Checkbox>
                <hr className="my-2 border-t border-gray-300" />
                <Checkbox
                  name="AnyOne"
                  isChecked={communityType === "AnyOne"}
                  onChange={onCommunityTypeChange}
                >
                  <Box align="center" className="flex items-center">
                    <Icon
                      as={MdPublic}
                      className="ml-3 mr-2 bg-gray-500 text-2xl"
                    />
                    <Stack gap={0} className="m-2">
                      <Typography className="text-md font-semibold">
                        AnyOne
                      </Typography>
                      <Typography className="text-xs text-gray-500">
                        Anyone can view, post and comment to this community
                      </Typography>
                    </Stack>
                  </Box>
                </Checkbox>
                <hr className="my-2 border-t border-gray-300" />
                <Checkbox
                  name="AnyOne"
                  isChecked={communityType === "AnyOne"}
                  onChange={onCommunityTypeChange}
                >
                  <Box align="center" className="flex items-center">
                    <Icon
                      as={MdPublic}
                      className="ml-3 mr-2 bg-gray-500 text-2xl"
                    />
                    <Stack gap={0} className="m-2">
                      <Typography className="text-md font-semibold">
                        AnyOne
                      </Typography>
                      <Typography className="text-xs text-gray-500">
                        Anyone can view, post and comment to this community
                      </Typography>
                    </Stack>
                  </Box>
                </Checkbox>
                <hr />
              </Stack>
            </MenuList>
          </Menu>
        </Box>

        <hr />

        <Box className="p-3">
          {/* <ModalCloseButton /> */}
          <div className="flex flex-col py-10">
            <TextareaAutosize
              name="body"
              className="h-32 rounded-md bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              value={textInput.body}
              onChange={onTextChange}
              placeholder="What do you want to talk about?"
            />
          </div>
          <Button
            variant="ghost"
            onClick={handleHashTag}
            className="bg-blue-400 text-sm"
          >
            Add hashtag
          </Button>
        </Box>

        <div className="bord rounded ">
          <Box className="flex flex-1">
            <ModalFooterIcon
              communityType={communityType}
              selectedFile={selectedFile}
              onSelectedImage={onSelectedFile}
              setSelectedFile={setSelectedFile}
            />
          </Box>
          <Button
            className="btn btn-primary ml-3 border-primary px-5 py-2  hover:text-blue-700 "
            onClick={handleCreateCommunity}
            disabled={!textInput.body}
            isLoading={loading}
          >
            Post
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
export default CreatePost;
