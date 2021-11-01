const namespace = '[refreshing] '
const START = namespace + 'START'
const END = namespace + 'END'

export const actionsTypes = {
  START,
  END,
}

export const refreshStart = () => ({
	type: START
})

export const refreshEnd = () => ({
	type: END
})
