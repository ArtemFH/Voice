import {useEffect, useRef, useState} from "react";
import {useActions} from "../../../store/hook";
import {useSelector} from "react-redux";
import {Alert} from "@mui/material";

function Login() {

    const $email = useRef(null);
    const $password = useRef(null);

    const {login} = useActions()
    const {loading} = useSelector(state => state.user)

    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(loading)
    }, [loading])

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = $email.current.value;
        const password = $password.current.value;

        login({email, password})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"email"} placeholder={"Email"} ref={$email}/>
            <input type={"password"} placeholder={"Password"} ref={$password}/>
            {load && <Alert variant="outlined" severity="error" onClose={() => {
                setLoad(false)
            }}>This is a success alert — check it out!</Alert>}
            <button type={"submit"}>Отправить</button>
        </form>
    )
}

export default Login;