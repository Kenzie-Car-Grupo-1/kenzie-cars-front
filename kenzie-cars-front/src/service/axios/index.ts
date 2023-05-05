import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://kenzie-deploy-render.onrender.com",
});
