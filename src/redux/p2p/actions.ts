import { ILogin, ISignup } from "../../model/auth.interfaces"
import { ITransactionPayload, IUserData } from "../../model/reducers.interfaces"

const namespace = '[p2p] '
const GET_USER = namespace + 'GET_USER'
const SET_USER = namespace + 'SET_USER'
const SET_AMOUNT = namespace + 'SET_AMOUNT'
const SET_COMMENT = namespace + 'SET_COMMENT'
const SEND_PAYMENT = namespace + 'SEND_PAYMENT'
const CLEAR_DATA = namespace + 'CLEAR_DATA'

export const actionsTypes = {
	GET_USER,
	SET_USER,
	SET_AMOUNT,
	SET_COMMENT,
	SEND_PAYMENT,
	CLEAR_DATA,
}

export const getUser = (payload: { email: string, data: { amount: number, comment: string }, callback: Function }) => ({
	type: GET_USER,
	payload,
})

export const setUser = (payload: IUserData) => ({
	type: SET_USER,
	payload,
})

export const setAmount = (payload: number) => ({
	type: SET_AMOUNT,
	payload,
})

export const setComment = (payload: string) => ({
	type: SET_COMMENT,
	payload,
})

export const sendPayment = (payload: ITransactionPayload) => ({
	type: SEND_PAYMENT,
	payload,
})

export const clearData = () => ({
	type: CLEAR_DATA
})
