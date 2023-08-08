import axios from "axios";

const api = axios.create({
  baseURL: "https://6fk13vng11.execute-api.us-east-2.amazonaws.com/production/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
