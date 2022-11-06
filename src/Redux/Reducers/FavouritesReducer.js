const initialState = {
    favourites:[]
}

export const FavouritesReducer = (state=initialState,action) => {
    const{type,payload} = action;

    switch(type) {
        default:
            return state;
    }
}