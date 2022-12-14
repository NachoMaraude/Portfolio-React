import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postEmail = createAsyncThunk(
    "email/postEmail",
    async (payload) => {
        try {
            if (window.location.href.slice(0, 16) !== "http://localhost") {
                return await axios.post(
                    "https://portfolio-backend-cefs.onrender.com/api/email",
                    payload
                );
            } else {
                return await axios.post(
                    "http://localhost:3001/api/email",
                    payload
                );
            }
        } catch (error) {
            console.log("error -----------> ", error);
        }
    }
);
