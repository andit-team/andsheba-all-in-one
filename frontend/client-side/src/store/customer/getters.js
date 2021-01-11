export const getCustomer = state => {
    return state.customer
}

export const getOrders = state => {
    return state.orders.reverse()
}

export const getOrdersStatus = state => {
    return state.ordersStatus
}

export const getOrder = state => {
    return state.order
}

export const getDashboard = state => {
    return state.dashboard
}