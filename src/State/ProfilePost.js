
export const ProfilePost =(state, action) =>{
    if (action.type === 'ADD_POST') {
        let newPost = {
            id: '5',
            massager: action.addPost ,
            liks: '2222'
        };

        state.Post.push(newPost);
     
    }
    return state
}

export const ADD_POST = (text) => {
    return ({ type: 'ADD_POST', addPost: text })
}