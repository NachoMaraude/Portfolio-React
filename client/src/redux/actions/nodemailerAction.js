import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postEmail = createAsyncThunk(
    "email/postEmail",
    async (payload) => {
        return await axios.post("http://localhost:3001/api/email", payload);
    }
);
