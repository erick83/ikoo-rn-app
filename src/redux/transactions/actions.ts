const namespace = '[transactions] '
const GET = namespace + 'GET'
const SET = namespace + 'SET'

export const actionsTypes = {
	GET,
  SET,
}

export const getTransactions = () => ({
	type: GET,
})

export const setTransactions = (payload: any) => ({
	type: SET,
	payload,
})
