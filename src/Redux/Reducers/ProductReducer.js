const initialState = {
    allProducts:[]
}

export const ProductReducer = (state=initialState,action) => {
    const{type,payload} = action;

    switch(type) {
        case "SET_PRODUCTS":
            return {...state, allProducts:payload}
        default:
            return state;
    }
}