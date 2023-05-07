export const CounterReducer = (state, action) => {
    // switch statement
    switch (action.type) {
        case "ADD":
            return { count: state.count + 1 }
        case "DEC":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }

        default: return state
    }
    // if else condition

    // if (action.type === "ADD") {
    //     return {
    //         count: state.count + 1
    //     }
    // }
    // if (action.type === "DEC") {
    //     return {
    //         count: state.count - 1
    //     }
    // }
    // if (action.type === "RESET") {
    //     return {
    //         count: 0
    //     }
    // }
    // return state;
}