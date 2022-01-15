import axios from "axios";

export const baseURL = "https://api.englishpatient.org/";

export const $instance = axios.create({
    baseURL
})