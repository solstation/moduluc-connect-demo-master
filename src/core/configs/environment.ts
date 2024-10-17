export const config = {
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  },
};
export const isDev = process.env.NEXT_PUBLIC_API_URL === "development";
