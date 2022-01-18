import {$instance} from "../api";

const search = async (data) => {
    return await $instance.get(`/todos/${data}`)
}
export default {search}