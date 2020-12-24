

// Get All
export function setAgents (state, data) {
  state.agents = data
}

// Get One
export function setAgent (state, data) {
  state.agent = data
}

// Add
export function pushAgents (state, data) {
  state.agents.splice(0, 0, data.data)
}


export const setStatus = (state, status ) => {
  // state.agents = status
}

