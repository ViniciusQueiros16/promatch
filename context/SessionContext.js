import React, { createContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import api from "services/api";

const SessionContext = createContext(null);

const SessionContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authenticateToken = async () => {
    try {
      const token = getCookie("authorization");

      if (!token) throw new Error("Token Inválido!");

      const sessionResponse = await api.get(`users/profile?token=${token}`);

      const userData = sessionResponse.data;

      setUser(userData);
    } catch (error) {
      setUser(null);
      setError(error.message);
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
