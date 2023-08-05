import React, { createContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const SessionContext = createContext(null);

const SessionContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authenticateToken = async () => {
    try {
      const token = getCookie("authorization");
      console.log(token);
      if (!token) throw new Error("Token Invalido!");

      const sessionResponse = await fetch(
        `https://6fk13vng11.execute-api.us-east-2.amazonaws.com/production/users/profile?userID=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!sessionResponse.ok)
        throw new Error("Erro ao obter a sessão do usuário.");

      const userData = await sessionResponse.json();

      console.log(userData);

      setUser(userData);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    authenticateToken();
  }, []);

  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
};

export { SessionContext, SessionContextProvider };
