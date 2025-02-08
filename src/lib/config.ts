import axios from "axios";

// const MILLA_URL = "https://api.milla.com.pe";
const MILLA_URL = "http://127.0.0.1:8000/api/libro-reclamaciones";

const api = axios.create({ baseURL: MILLA_URL });

export default api;
