import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postEmail = createAsyncThunk(
  "email/postEmail",
  async (payload) => {
    // Render (plan free) puede tardar en despertar.
    const url =
      window.location.hostname === "localhost"
        ? "http://localhost:3001/api/email"
        : "https://portfolio-backend-cefs.onrender.com/api/email";
    const { data } = await axios.post(url, payload, { timeout: 60000 });
    return data;
  },
);
