import {$instance} from "../api";

const login = async (email, password) => {
    return await $instance.post('login', {email, password})
}

export default {login}