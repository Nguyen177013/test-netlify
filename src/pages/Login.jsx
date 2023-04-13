import React from "react";
import { useLoaderData, useNavigate, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}
export async function action({ request }) {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    try {
        const host = new URL(request.url).searchParams.get('redirectTo');
        const res = await loginUser({ email, password });
        if (res.length > 0) {
            localStorage.setItem("loggedin", true);
            return redirect(host);
        }
        else {
            return "Email or password not correct";
        }
    }
    catch (err) {
        return err.message;
    }
}
export default function Login() {
    const error = useActionData();
    let loginMessage = useLoaderData();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const status = navigation.state;
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {loginMessage && <p className="red">{loginMessage}</p>}
            {error && <p className="red">{error}</p>}
            <Form
                className="login-form"
                method="POST"
                replace>
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
                    disabled={status === "submitting"}
                    style={status === "submitting" ? { backgroundColor: "#ccc" } : {}}
                >Log in</button>
            </Form>
        </div>
    )

}