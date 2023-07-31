import HomePost from "./HomePost";
import HomePostInput from "./HomePostInput";
import React, { useEffect, useState } from "react";

const Feed = ({ session }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de dados fictícios para um post
    const fakePost = {
      userId: "user-1", // ID do usuário que fez o post
      caption: "Este é um post de exemplo!", // Legenda do post
      communityType: "AnyOne", // Tipo de comunidade ("AnyOne", "Group", "Twitter", etc.)
      avatar: "https://example.com/image.jpg", // URL da imagem do post
      timestamp: 1679795200, // Data/hora do post
      username: "user1", // Nome de usuário
      company: "Empresa XYZ", // Nome da empresa (opcional)
    };

    // Adicione o post fictício ao estado de posts
    setPosts([fakePost]);
  }, []);

  return (
    <div className="scrollbar-hide col-span-full max-h-screen items-center overflow-scroll border-x lg:col-span-5 xl:mr-5">
      <div>
        <HomePostInput session={session} />
      </div>
      <hr />
      <div className="mt-5">
        {posts.map((post) => (
          <div key={post.userId}>
            <HomePost
              session={session}
              id={session.userId}
              caption={post.caption}
              communityType={post.communityType}
              image={session.avatar}
              profileImage={session.avatar}
              company={post.company}
              timestamp={post.timestamp}
              username={session.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
