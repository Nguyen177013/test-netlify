export default async function getVans(param = null) {
    // console.log(`http://localhost:8080/vans/${param.id?param.id:""}`);
    const res = await fetch(`http://localhost:8080/vans/${param?param.id:""}`);
    if(!res.ok){
        throw{
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data
}
export async function loginUser(creds) {
    const {email, password} = creds;
    const res = await fetch(`http://localhost:8080/user?email=${email}&password=${password}`)
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}