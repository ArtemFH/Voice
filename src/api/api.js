import axios from "axios";

export const baseURL = "http://138.68.97.93:3000/";

export const $instance = axios.create({
    baseURL
})