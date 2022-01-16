import {useEffect, useRef, useState} from "react";
import {useActions} from "../../../store/hook";
import {useSelector} from "react-redux";
import {Alert} from "@mui/material";

function Login() {

    const $email = useRef(null);
    const $password = useRef(null);
    const token = "r:0f6c400666d55b5d413350e4521d3c77"
    const {me} = useActions()
    const {user, errors} = useSelector(state => state.user)

    const [err, setErr] = useState(false);
    useEffect(() => {
        setErr(errors)
    }, [errors])

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = $email.current.value;
        const password = $password.current.value;

        me({token})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"email"} placeholder={"Email"} ref={$email}/>
            <input type={"password"} placeholder={"Password"} ref={$password}/>
            {err && <Alert variant="outlined" severity="error" onClose={() => {
                setErr(false)
            }}>This is a success alert — check it out!</Alert>}
            {<pre>{JSON.stringify(user, undefined, 2)}</pre>}
            <button type={"submit"}>Отправить</button>
        </form>
    )
}

export default Login;