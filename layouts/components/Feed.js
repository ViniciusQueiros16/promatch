import React, { useContext, useEffect, useState } from "react";
import HomePost from "./HomePost";
import HomePostInput from "./HomePostInput";
import { SessionContext } from "context/SessionContext";
import api from "services/api";

const Feed = () => {
  const user = useContext(SessionContext);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get(`post?page=${page}`);
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, [page]); // Only run this effect when 'page' changes

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollHeight - scrollTop === clientHeight) {
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };

  return (
    <div
      className="scrollbar-hide col-span-full max-h-screen items-center overflow-scroll border-x lg:col-span-5 xl:mr-5"
      onScroll={handleScroll}
    >
      <div>
        <HomePostInput user={user} />
      </div>
      <hr />
      <div className="mt-5">
        {posts.map((post) => (
          <div key={post.id}>
            <HomePost
              id={post.id}
              message={post.message}
              communityType={post.communityType}
              image={post.image_url}
              avatar={post.avatar}
              company={post.company}
              timestamp={post.timestamp}
              username={post.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
