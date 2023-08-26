import React, { useRef, useState } from "react";
import { Button, Box, Icon, Modal, Stack } from "@mui/material";
import { BsFillBarChartFill } from "react-icons/bs";
import {
  MdDescription,
  MdMoreHoriz,
  MdSportsBaseball,
  MdWork,
} from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { GrYoutube } from "react-icons/gr";
import ImageFallback from "../ImageFallback";

const ModalFooterIcon = ({
  communityType,
  selectedFile,
  onSelectedImage,
  setSelectedFile,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedFileRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Box className="flex items-center space-x-4 md:space-x-8">
        <Icon
          as={IoMdPhotos}
          cursor="pointer"
          className="footer-icons"
          onClick={handleOpen}
        />

        <Icon as={GrYoutube} cursor="pointer" className="footer-icons" />

        <Icon as={MdDescription} cursor="pointer" className="footer-icons" />

        <Icon as={MdWork} cursor="pointer" className="footer-icons" />

        <Icon as={MdSportsBaseball} cursor="pointer" className="footer-icons" />

        <Icon
          as={BsFillBarChartFill}
          cursor="pointer"
          className="footer-icons"
        />

        <Icon as={MdMoreHoriz} cursor="pointer" className="footer-icons" />
        <div className="ml-8 border-l-2 border-gray-500"></div>
        {/* <Button
          colorScheme="gray"
          variant="ghost"
          className="btn btn-primary bg-blue-400 p-1 px-4 text-sm text-gray-600"
        >
          {communityType}
        </Button> */}
      </Box>

      <Modal open={isOpen} onClose={handleClose} size="lg">
        <Box
          className="shadow-24 absolute left-1/2 top-1/2 w-4/6 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-theme-light  p-4 dark:bg-darkmode-body"
          maxWidth="600px"
        >
          <div className="text-2xl text-gray-600">Edit your photo</div>
          <hr className="my-2 border-t border-gray-300" />

          <Box direction="column" justify="center" align="center" width="100%">
            {selectedFile ? (
              <>
                <ImageFallback
                  src={selectedFile}
                  className="h-full w-full"
                  height="100"
                  width="200"
                  alt="selected image"
                />
                <Stack direction="row" mt={4}>
                  <Button
                    variant="outline"
                    height="28px"
                    onClick={() => setSelectedFile("")}
                    className="rounded-md"
                  >
                    Remove
                  </Button>
                  <Button
                    height="28px"
                    onClick={handleClose}
                    className="rounded-md"
                  >
                    Done
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <Box
                  justify="center"
                  align="center"
                  p={20}
                  border="1px dashed"
                  borderColor="gray.200"
                  width="100%"
                  borderRadius={4}
                  className="mb-4"
                >
                  <Button
                    height="28px"
                    onClick={() => selectedFileRef.current?.click()}
                    className="rounded-md bg-green-200"
                  >
                    Select images to share
                  </Button>
                  <input
                    ref={selectedFileRef}
                    type="file"
                    hidden
                    onChange={onSelectedImage}
                  />
                </Box>

                <Box>
                  <Button
                    onClick={handleClose}
                    className="btn btn-primary bg-blue-400 p-1 px-4 text-sm"
                  >
                    Back
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalFooterIcon;
