import {$instance} from "../api";

const search = async (data) => {
    const query = data.trim().split(' ');
    return await $instance.get(`/event`, data ? {
        params: {
            tags: query
        }
    } : {})
}

const exported = {
    search
}

export default exported