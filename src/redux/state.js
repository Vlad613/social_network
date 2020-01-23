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
    getState() {
        return this._state;
    },
    rerenderApp() {
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCounts: 3
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ' ';
        this._rerenderApp(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderApp(this._state);
    },
    subscribe(observer) {
        this._rerenderApp = observer
    }

}

export default store;
window.store=store;