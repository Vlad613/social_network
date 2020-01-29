import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogsReducer";
import sitebarReducer from "./sitebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likeCounts: '12'},
                {id: 1, message: "It's, my fierst post", likeCounts: '11'},
                {id: 2, message: 'Hi!', likeCounts: '22'},
            ],

            newPostText: 'it-Kamasutra'
        },


        messagesPage: {
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
            ],
            newMessageBody: ''

        },

        sitebar: {
            friends:
                [
                    {
                        id: 1,
                        ava: "'../../../Picture/FriendsPhoto/AlexPhoto.jpg/'",
                        name: "Alex",
                    },

                    {
                        id: 2,
                        ava: '../../../Picture/FriendsPhoto/DenPhoto.jpg/',
                        name: "Den",
                    },

                    {
                        id: 3,
                        ava: '../../../Picture/FriendsPhoto/MaxPhoto.jpg/',
                        name: "Max",
                    },

                ],
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;},

    subscribe(observer) {
        this._callSubscriber = observer},

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }};


export default store;
window.store = store;