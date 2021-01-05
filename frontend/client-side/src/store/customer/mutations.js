export const setCustomer = (state, customer) => {
    state.customer = {
        ...state.customer,
        ...customer
    }
}

export const setOrders = (state, orders) => {
    state.orders = orders
}