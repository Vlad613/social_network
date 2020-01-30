let initialState = {

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

};


const sitebarReducer = (state=initialState, action) => {


    return state;
};

export default sitebarReducer;