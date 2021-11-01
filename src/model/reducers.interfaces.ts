import { DefaultRootState } from "react-redux";
import { IAuthStore } from "./auth.interfaces";

export interface RootState extends DefaultRootState{
  auth: IAuthStore
  p2p: IP2P
  transactions: ITransactionData[]
  refresh: { active: boolean },
  loader: { active: boolean },
}

export interface IP2P{
  targetUserData: IUserData
  amount: number
  comment: string
}

export interface ResponseGenerator{
  config?: any
  data?:any
  status?:number
  headers?: any
  statusText?:string
}

export interface IState {
  type: string
  payload: any
}

export interface IUserData {
  id: string
  name: string
	lastname: string
	email: string
	password: string
	phone: string
	phone2: string
	identityDocType?: string
	identityDocValue?: string
	nationality?: string
	addressCountry?: string
	province?: string
	city?: string
	address?: string
  balance?: number
}

export interface ITransactionPayload {
  email: string
  amount: number
  comment?: string
  callback: Function
}

export interface ITransactionData {
  id: string
  code: string
  userID: string
  origin: string
  type: string
  comment: string
  amount: number
  createdAt: string
}
