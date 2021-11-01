import { ILogin, ISignup } from "../../model/auth.interfaces"

const namespace = '[auth] '
const SIGNUP = namespace + 'SIGNUP'
const LOGIN_REQUEST = namespace + 'LOGIN_REQUEST'
const LOGIN = namespace + 'LOGIN_RESPONSE'
const LOGOUT_REQUEST = namespace + 'LOGOUT_REQUEST'
const LOGOUT = namespace + 'LOGOUT'

export const actionsTypes = {
	SIGNUP,
	LOGIN_REQUEST,
	LOGIN,
	LOGOUT_REQUEST,
	LOGOUT,
}

export const signup = (payload: ISignup) => ({
	type: SIGNUP,
	payload,
})

export const loginRequest = (payload: ILogin) => ({
	type: LOGIN_REQUEST,
	payload,
})

export const login = (payload: ILogin) => ({
	type: LOGIN,
	payload,
})

export const logoutRequest = () => ({
	type: LOGOUT,
})

export const logout = () => ({
	type: LOGOUT,
})
