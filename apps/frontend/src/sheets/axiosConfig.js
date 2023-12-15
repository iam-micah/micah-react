import axios from "axios";
import apiKeys from "./apiKeys";

const instance = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${apiKeys.spreadSheetId}/values/PersonalInfo?key=${apiKeys.googleSheetsApiKey}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
