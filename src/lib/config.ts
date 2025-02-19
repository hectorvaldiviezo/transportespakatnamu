import axios from "axios";

const MILLA_BASE = "https://milla.grupopakatnamu.com";
// const MILLA_BASE = "http://127.0.0.1:8000";
const MILLA_URL = MILLA_BASE + "/api/libro-reclamaciones";

const api = axios.create({ baseURL: MILLA_URL });

export { MILLA_BASE, MILLA_URL };
export default api;
