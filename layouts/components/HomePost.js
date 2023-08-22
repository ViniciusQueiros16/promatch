import { Avatar, Icon, Input, Grid, Stack, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import moment from "moment";

import React, { useEffect, useState } from "react";

import {
  BsFillPeopleFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";
import {
  MdComment,
  MdGroupAdd,
  MdInsertEmoticon,
  MdMoreHoriz,
  MdPublic,
  MdSend,
} from "react-icons/md";
import Comments from "./Comments";

// import { firestore } from "../firebase/firebase";

const IconImage = [
  "https://i.postimg.cc/4dpPnmBh/linkedin-funny-emoticon-250.png",
  "https://i.postimg.cc/0jxfSPBX/Linkedin-Celebrate-Icon-Clapping-Hands250.png",
  "https://i.postimg.cc/1zkM9pcQ/Linkedin-Support-Icon-Heartin-Hand250.png",
];
const SecondIconImage = [
  "https://i.postimg.cc/YSGbKXFR/Linkedin-Love-Icon-Heart250.png",
  "https://i.postimg.cc/Cx6m2yRd/Linkedin-Insightful-Icon-Lamp250.png",
  "https://i.postimg.cc/4NP8zHZ6/Linkedin-Curious-Icon-Purple-Smiley250.png",
];

const HomePost = ({
  message,
  communityType,
  image,
  avatar,
  timestamp,
  username,
  company,
  id,
}) => {
  //   const { session }=useSession();
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState({ title: "", body: "" });
  const [commentLength, setCommentsLength] = useState();
  const [likes, setLikes] = useState([]);
  const [hasLikes, setHasLikes] = useState(false);
  const [speed, setSpeed] = useState();
  const [reactions, setReactions] = useState("");
  const [secondReactions, setSecondReactions] = useState("");
  const [commentLoading, setCommentsLoading] = useState(false);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const onTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setTextInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //   const sendComment = async (e) => {
  //     e.preventDefault();
  //     setCommentsLoading(true);

  //     try {
  //       await addDoc(collection(firestore, "posts", id, "comments"), {
  //         comment: textInput.body,
  //         username: session?.user?.name,
  //         userImage:
  //           session?.user?.image ||
  //           `https://avatars.dicebear.com/api/avataaars/${speed}.svg`,
  //         timestamp: serverTimestamp(),
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     setTextInput({ title: "", body: "" });
  //     setCommentsLoading(false);
  //   };

  //   useEffect(
  //     () =>
  //       onSnapshot(collection(firestore, "posts", id, "likes"), (snapshot) =>
  //         setLikes(snapshot.docs)
  //       ),
  //     [firestore, id]
  //   );

  //   useEffect(
  //     () =>
  //       setHasLikes(
  //         likes.findIndex((like) => like.id === session?.user?.uid) !== -1
  //       ),
  //     [likes]
  //   );

  useEffect(() => {
    setReactions(shuffle(IconImage).pop());
    setSecondReactions(shuffle(SecondIconImage).pop());
  }, [likes]);

  //   const likePost = async () => {
  //     try {
  //       if (hasLikes) {
  //         await deleteDoc(
  //           doc(firestore, "posts", id, "likes", session?.user?.uid!)
  //         );
  //       } else {
  //         await setDoc(
  //           doc(firestore, "posts", id, "likes", session?.user?.uid!),
  //           {
  //             username: session?.user?.name,
  //           }
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="my-7 rounded-sm border  bg-theme-light dark:bg-darkmode-body"
      style={{ borderRadius: "10px" }}
    >
      <div className="flex items-center p-5">
        <Avatar
          name={username}
          className="mr-3 h-12 cursor-pointer
        rounded-full border object-contain p-1"
          src={
            avatar
              ? avatar
              : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
          }
        />

        <Stack marginLeft="5px">
          <Typography fontSize="12pt" fontWeight={600}>
            {username}
          </Typography>
          <Typography style={{ marginTop: "-4px" }} fontSize="9pt">
            {company}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            style={{ marginTop: "-4px" }}
          >
            <Typography fontSize="10pt">
              {moment(timestamp).fromNow()}
            </Typography>
            {communityType === "AnyOne" ? (
              <Icon
                as={MdPublic}
                style={{
                  fontSize: "15px",
                  color: "gray",
                  marginLeft: "10px",
                }}
              />
            ) : communityType === "Group" ? (
              <Icon
                as={MdGroupAdd}
                style={{
                  fontSize: "15px",
                  color: "gray",
                  marginLeft: "10px",
                }}
              />
            ) : (
              <Icon
                as={communityType === "Twitter" ? MdPublic : BsFillPeopleFill}
                style={{
                  fontSize: "15px",
                  color: "gray",
                  marginLeft: "10px",
                }}
              />
            )}
          </Stack>
        </Stack>
        <Grid className="ml-80 flex">
          <MdMoreHoriz className=" h-5 cursor-pointer" />
        </Grid>
      </div>
      <Typography
        fontSize="12pt"
        marginLeft="10px"
        marginRight="10px"
        marginBottom="10px"
      >
        {message}
      </Typography>
      {image && <img src={image} className="w-full object-cover" alt="" />}

      <div className="flex justify-end">
        {likes.length > 0 && (
          <div className="flex flex-1 items-start justify-start	 px-4 pb-2 pt-4 ">
            <img
              className="h-4 w-4"
              src="https://i.postimg.cc/tJ5zt80q/Linkedin-Like-Icon-Thumbup250.png"
              alt=""
            />
            {likes.length > 1 && (
              <img className="h-4 w-4" src={reactions} alt="" />
            )}
            {likes.length > 2 && (
              <img className="h-4 w-4" src={secondReactions} alt="" />
            )}
            <Typography fontSize="11px" marginLeft="2px">
              {likes.length}
            </Typography>
          </div>
        )}
        {commentLength > 0 && (
          <div className="flex items-end justify-end px-4 pb-2 pt-4">
            <Typography fontSize="11px" marginLeft="2px">
              {commentLength}
            </Typography>
            <Typography fontSize="11px" marginLeft="3px">
              Comments .
            </Typography>
            <Typography fontSize="11px" marginLeft="2px">
              {faker.random.numeric()}
            </Typography>
            <Typography fontSize="11px" marginLeft="3px">
              Share .
            </Typography>
          </div>
        )}
      </div>

      <hr />

      <div className="flex justify-between px-4 pb-4 pt-4">
        <div className="m-auto flex space-x-10">
          {hasLikes ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // onClick={likePost}
              className="flex cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
            >
              <BsHandThumbsUpFill className="h-6 w-6 text-blue-500" />
              <p className="ml-2">Like</p>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // onClick={likePost}
              className="flex cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
            >
              <BsHandThumbsUp className="h-6 w-6 text-gray-500" />
              <p className="ml-2">Like</p>
            </motion.div>
          )}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
              open
                ? `flex cursor-pointer rounded-md bg-gray-100 px-4 py-2 hover:bg-transparent`
                : `flex cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100`
            }
            onClick={handleOpen}
          >
            <MdComment className="h-6 w-6" />
            <p className="ml-2">Comment</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer transition-all duration-150 ease-out hover:animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>

            <p className="ml-2">Repost</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
          >
            <MdSend className="h-6 w-6 -rotate-45 text-gray-500" />
            <p className="ml-2">Send</p>
          </motion.div>
        </div>
      </div>

      {open && (
        <>
          <form className="flex items-center p-4">
            <Avatar
              size="md"
              className="mr-3 h-12 cursor-pointer
        rounded-full border object-contain p-1"
              name={session?.user?.name}
              src={session?.user?.image}
            />
            <Input
              name="body"
              value={textInput.body}
              onChange={onTextChange}
              placeholder="Add a comment..."
              className="flex-1 border-none outline-none focus:ring-0"
            />
            <MdInsertEmoticon className="ml-1 mr-2" />
            {commentLoading ? (
              <button className="font-semibold text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!textInput.body}
                onClick={sendComment}
                className="font-semibold text-blue-400"
              >
                Post
              </button>
            )}
          </form>
          <Comments id={id} setCommentsLength={setCommentsLength} />
        </>
      )}
      <div hidden>
        <Comments id={id} setCommentsLength={setCommentsLength} />
      </div>
    </motion.div>
  );
};
export default HomePost;
