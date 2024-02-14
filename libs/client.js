import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "6ivtvvam53",
  apiKey: process.env.API_KEY,
});
