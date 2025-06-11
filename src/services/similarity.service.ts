import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const getAllSimilarities = async (page = 1, limit = 10) => {
    const response = await axios.get(`${API_BASE}/get-all-similarities/`, {
        params: { page, limit }
    });
    console.log(response.data);
    return response;
};

export const getAllSimilaritiesRaw = async () => {
    const response = await axios.get(`${API_BASE}/get-all-similarities/`, {
        params: { all: true }
    });
    return response;
};

export const getSimilaritiesByTransform = async (transform: string) => {
    const response = await axios.get(`${API_BASE}/get-similarity-by-transform/`, {
        params: { transform }
    });
    return response.data;
};

export const fetchSimilarityData = async (currentId?: string) => {
    const url = currentId
        ? `/get-session/?current_id=${currentId}`
        : `/get-session/`;

    const sessionRes = await axios.get(`${API_BASE}${url}`);
    const { comparison_id, total, current_index } = sessionRes.data;

    const dataRes = await axios.get(`${API_BASE}/get-similarity/${comparison_id}/`);
    return { ...dataRes.data, total, current_index };
};