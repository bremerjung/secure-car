import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";


type Props = {
    login: (username: string, password: string) => Promise<void>
}

function LoginPage(props: Props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate()

    function loginOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.login(username, password)
            .then(() => {
                nav("/")
            });
    }

    function onChangeHandlerUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={loginOnSubmit}>
                <input type="text" onChange={onChangeHandlerUsername}/>
                <input type="password" onChange={onChangeHandlerPassword}/>
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default LoginPage;