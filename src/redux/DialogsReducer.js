const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutre'},
        {id: 3, message: 'Yoyoyo'},
        {id: 4, message: 'Yoyoyo'},
        {id: 5, message: 'Yoyoyo'},
    ],

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
    ]

};


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case   SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
};


export const sendMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody});

export default dialogReducer;