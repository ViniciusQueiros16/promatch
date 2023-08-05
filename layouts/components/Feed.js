import React, { useContext, useEffect, useState } from "react";
import HomePost from "./HomePost";
import HomePostInput from "./HomePostInput";
import { SessionContext } from "context/SessionContext";

const Feed = () => {
  const user = useContext(SessionContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de dados fictícios para um post
    const fakePost = {
      id_user: "user-1", // ID do usuário que fez o post
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
        <HomePostInput user={user} />
      </div>
      <hr />
      <div className="mt-5">
        {posts.map((post) => (
          <div key={post.id_user}>
            <HomePost
              user={user}
              id={user?.id_user}
              caption={post.caption}
              communityType={post.communityType}
              image={user?.avatar}
              profileImage={user?.avatar}
              company={post.company}
              timestamp={post.timestamp}
              username={user?.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
