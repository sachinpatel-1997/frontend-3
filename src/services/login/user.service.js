import Global from "../helpers/global";
import { authHeader } from "../helpers/auth-header";
export const userService = {
login,
};
async function login(email, password) {
const requestOptions = {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, password }),
};
return fetch(Global.BASE_API_PATH + "/v1/auth/login", requestOptions)
.then(handleResponse)
.then((res) => {
return res;
});
function handleResponse(response) {
return response.text().then((text) => {
const data = JSON.parse(text);
if (!response.ok) {
if (response.status === 401) {
}
const error = (data && data.message) || response.statusText;
return Promise.reject(error);
}
return data;
});
}
}