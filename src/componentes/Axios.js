import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5173/src/assets/JSON-hacker-news",
});

export const getPosts = async () => {
  const response = await api.get("/hackernews.json");
  return response.data.hits;
};
