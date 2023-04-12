import React from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import {loginUser} from "../api";

export function loader({request}){
    return new URL (request.url).searchParams.get('message');
}
export async function action({request}){
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const res = await loginUser({email, password});
    if(res.length > 0){
        localStorage.setItem("loggedin",true);
    }
    return null;
}
export default function Login() {
    let loginMessage = useLoaderData();
    const [status, setStatus] = React.useState("idle");
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        loginMessage = null;
        setStatus("submitting");
        loginUser(loginFormData)
        .then(data=>{
            if(data[0] === undefined){
                setError("Email or password is not correct");
            }
            else{
                setError(null);
                navigate("/host")
            }
            setStatus("idle");
        })
        .catch(error=>setError(error));
    }
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {loginMessage && <p className="red">{loginMessage}</p>}
            {error && <p className="red">{error}</p>}
            <Form className="login-form" method="POST">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled = {status==="submitting"}
                    style={status==="submitting"?{backgroundColor:"#ccc"}:{}}
                >Log in</button>
            </Form>
        </div>
    )

}