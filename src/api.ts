import axios from "axios";

const API = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default API;