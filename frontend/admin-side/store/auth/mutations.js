export function login (state, data) {
  state.token = data
}

export function setStatus (state, data) {
  state.token = ''
  state.user = []
}
