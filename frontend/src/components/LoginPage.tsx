import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function loginOnSubmit(e: FormEvent<HTMLFormElement>) {
        axios.post("/user/login", undefined, {auth: {username, password}})
            .then(r => console.log(r.data))
    }

    function onChangeHandlerUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={loginOnSubmit}>
                <input type="text" onChange={onChangeHandlerUsername}/>
                <input type="password" onChange={onChangeHandlerPassword}/>
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default LoginPage;