import Base from "@layouts/Baseof";
import { useState } from "react";
import { Favorite, ChatBubble, Share } from "@mui/icons-material";
import ImageFallback from "./ImageFallback";
import Link from "next/link";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jon Doe",
      timestamp: "2 hours ago",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ratione dicta deleniti, quas distinctio, veniam quo rem eveniet aliquid repudiandae fuga asperiores reiciendis tenetur? Eius quidem impedit et soluta accusamus.",
      likes: 3431,
      comments: 566,
      shares: 340,
      image: "/images/photoFeed.jpg",
    },
    {
      id: 2,
      author: "Jon Doe",
      timestamp: "2 hours ago",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ratione dicta deleniti, quas distinctio, veniam quo rem eveniet aliquid repudiandae fuga asperiores reiciendis tenetur? Eius quidem impedit et soluta accusamus.",
      likes: 3431,
      comments: 566,
      shares: 340,
      image: "/images/profilePicture.jpg",
    },
  ]);

  return (
    <Base>
      <div className="my-6 grid grid-cols-1 gap-6 px-4 md:px-6 lg:px-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg bg-theme-light mx-auto max-w-xl px-4 py-4 shadow-md dark:bg-darkmode-theme-dark"
          >
            <div className="flex flex-row items-center justify-between py-2">
              <div className="flex flex-row items-center">
                <Link
                  href="#"
                  className="focus:shadow-outline flex flex-row items-center rounded-lg focus:outline-none"
                >
                  <ImageFallback
                    className="w-full rounded-lg object-cover"
                    src={post.image}
                    width={8}
                    height={8}
                    alt=""
                    priority={false}
                  />
                  <p className="ml-2 text-base font-medium">{post.author}</p>
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-xs font-semibold text-gray-500">
                  {post.timestamp}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <ImageFallback
                className="w-full rounded-lg object-cover"
                src={post.image}
                width={200}
                height={200}
                alt=""
                priority={false}
              />
              <div className="flex flex-row items-center py-2">
                <button className="focus:shadow-outline flex flex-row items-center rounded-lg focus:outline-none">
                  <Favorite />
                  <span className="ml-1">{post.likes}</span>
                </button>
                <button className="focus:shadow-outline ml-3 flex flex-row items-center rounded-lg focus:outline-none">
                  <ChatBubble />
                  <span className="ml-1">{post.comments}</span>
                </button>
                <button className="focus:shadow-outline ml-3 flex flex-row items-center rounded-lg focus:outline-none">
                  <Share />
                  <span className="ml-1">{post.shares}</span>
                </button>
              </div>
            </div>
            <div className="py-2">
              <p className="leading-snug">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Feed;
