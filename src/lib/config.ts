import axios from "axios";

const MILLA_BASE = "https://milla.grupopakatnamu.com/api";
// const MILLA_BASE = "http://127.0.0.1:8000/api";
const MILLA_URL = "/libro-reclamaciones";

const api = axios.create({ baseURL: MILLA_BASE + MILLA_URL });
const apiMilla = axios.create({ baseURL: MILLA_BASE });

export { MILLA_BASE, MILLA_URL, api, apiMilla };
