import React, { useEffect, useState } from "react";

import moment from "moment";
import { Avatar } from "@mui/material";

const Comments = ({ id, setCommentsLength }) => {
  const [comments, setComments] = useState([]);

  //   useEffect(
  //     () =>
  //       onSnapshot(
  //         query(
  //           collection(firestore, "posts", id, "comments"),
  //           orderBy("timestamp", "desc")
  //         ),
  //         (snapshot) => setComments(snapshot.docs)
  //       ),
  //     [firestore, id]
  //   );
  //   useEffect(() => {
  //     setCommentsLength(comments.length);
  //   });

  return (
    <div>
      {/* comments */}
      {comments.length > 0 && (
        <div className="mb-5 ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="mb-3 flex
            items-center space-x-2"
            >
              <Avatar
                size="xs"
                src={comment.data().userImage}
                name={comment.data().username}
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">
                  {comment.data().username.slice(0, 6)}{" "}
                </span>
                {comment.data().comment}
              </p>
              <p className="px-2 text-[12px]">
                {moment(
                  new Date(comment.data().timestamp?.seconds * 1000)
                ).fromNow()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Comments;
