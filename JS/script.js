

var app = new Vue({
    el: '#main',
    data: {
        usersList: globalUsersList,
        selectedUser: {}
    },
    methods: {
        // restituisce il path per cambiare immagine
        getAvatarPath(avatarID){
            return `img/avatar${avatarID}.jpg`;
        },
        // per selezionare la conversazione
        onUserClick(user){
            this.selectedUser = user;
        }  
    }
})