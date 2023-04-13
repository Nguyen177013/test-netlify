import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const url = new URL(request.url).pathname;
    const isLoggedIn = localStorage.getItem('loggedin');
    if (!isLoggedIn) {
        throw redirect(`/login?message=Please login first&redirectTo=${url}`)
    }
    return null;
}