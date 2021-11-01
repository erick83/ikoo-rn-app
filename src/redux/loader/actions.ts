const namespace = '[loader] '
const START = namespace + 'START'
const END = namespace + 'END'

export const actionsTypes = {
  START,
  END,
}

export const loaderStart = () => ({
	type: START
})

export const loaderEnd = () => ({
	type: END
})
