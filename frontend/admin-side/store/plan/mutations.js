

// Push a new data to plans state
export function add (state, data) {
  state.plans.push(data)
}

export const setPlans = (state, sub_categories ) => {
  state.plans = plans
}

export const filterPlans = (state, id ) => {
  state.plans = state.plans.filter(item => item._id !== id)
}