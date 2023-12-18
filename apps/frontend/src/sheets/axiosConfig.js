import axios from "axios";
import apiKeys from "./apiKeys";

const instance = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${apiKeys.spreadSheetId}`,
    headers: {
        "Content-Type": "application/json",
    },
});

const fetchSheetData = async (sheetName) => {
    try {
        const response = await instance.get(
            `/values/${sheetName}?key=${apiKeys.googleSheetsApiKey}`
        );
        console.log("response: ", response);
        return response.data.values;
    } catch (error) {
        console.error("Error fetching sheet data: ", error);
    }
};

export default fetchSheetData;
