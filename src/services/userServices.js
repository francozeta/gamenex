
import { USER_DATA } from "../utils/constants";

const URL_API_BACKEND = `http://localhost:3000`

console.log(URL_API_BACKEND)

export const loginUser = async (data) => {
	const dataForSend = data 
	try {
		const response = await fetch(`${URL_API_BACKEND}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataForSend)
		})
		 
		const data = await response.json();

		if(!data.ok) {
			throw new Error(data.message)
		}

		localStorage.setItem("user", JSON.stringify(data.user))

		return data
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}

export const registerUser = async (data) => {
	const dataForSend = {
		names: data.names,
		lastNames: data.lastNames,
		email: data.email,
		password: data.password,
	}

	//si dentro del try habra algun error ira al catch
	try {
		const response = await fetch(`${URL_API_BACKEND}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataForSend)
		})

		const data = await response.json()

		if (!data.ok) {
			throw new Error(data.message) 
		}

		return data
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}
