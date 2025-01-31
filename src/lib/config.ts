import axios from "axios";

const MILLA_URL = "https://api.milla.com.pe";

const api = axios.create({ baseURL: MILLA_URL });

export default api;
