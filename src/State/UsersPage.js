
export const UsersPage =(state, action) =>{
    
    if (action.type === 'ADD_MASSAGES') {
        let newUserMassage = {
            massage: action.addUMassage,
        };
        state.Massages.push(newUserMassage);
     
    }
    return state
}

export const ADD_MASSAGES = (addMassage) => {
    return ({ type: 'ADD_MASSAGES', addUMassage: addMassage })
}
