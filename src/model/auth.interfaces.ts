import { IUserData } from "./reducers.interfaces";

export interface IAuthStore {
	isAuthenticated: boolean
	userData: IUserData|null
}

export interface ISignup {
	name: string
	lastname: string
	email: string
	password: string
	identityDocType: string
	identityDocValue: string
	phone: string
	phone2: string
	nationality: string
	addressCountry: string
	province: string
	city: string
	address: string
}

export interface ILogin {
	email: string
	password: string
}

