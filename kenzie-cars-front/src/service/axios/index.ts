import axios from "axios";

export const BaseURL = axios.create({
  baseURL: "http://localhost:3000",
});

// export const headerAuthorizationConfig = () => {
//   const token = localStorage.token;

//   if (!token) {
//     return {};
//   }

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };
// };
