// Backend Server URL
const baseURL = 'http://127.0.0.1:3000/';

export async function request(url, method = 'GET', body = null) {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method == 'POST' || method == 'PUT') {
        console.log("method was post or pull");
        options.body = JSON.stringify(body);
    }

    const response = await fetch(baseURL + url, options);
    const data = await response.json();

    if (!response.ok) {
        console.log(response);
        throw new Error(`${data.status}: ${data.message}`);
    } else return data;
}