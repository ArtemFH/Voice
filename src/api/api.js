import axios from "axios";

export const baseURL = "https://api.restority.dev.ipst-dev.com/";

export const $instance = axios.create({
    baseURL
})