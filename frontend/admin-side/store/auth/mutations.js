export function login (state, data) {
  state.token = data
}

export function setStatus (state) {
  state.token = ''
  state.user = []
}

export function setSocket (state,data) {
  state.socket = data
}
