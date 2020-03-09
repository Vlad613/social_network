const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCounts: '12'},
        {id: 1, message: "It's, my fierst post", likeCounts: '11'},
        {id: 2, message: 'Hi!', likeCounts: '22'},
    ],

    newPostText: 'it-Kamasutra'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounts: 3
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ' ';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy={...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }

};

export const addPostCreator = () =>
    ({type: ADD_POST});
export const updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;