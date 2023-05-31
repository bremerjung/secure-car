import React, {useState} from 'react';

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input type="text"/>
            <input type="password"/>
        </div>
    );
}

export default LoginPage;