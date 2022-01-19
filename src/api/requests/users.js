import {$instance} from "../api";

const login = async (email, password) => {
    return await $instance.post('login', {email, password})
}

const me = async (token) => {
    return await $instance.get('users/me', {headers: {'Authorization': token,}})
}

const exported = {
    login,
    me
}

export default exported