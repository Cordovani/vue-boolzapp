

var app = new Vue({
    el: '#main',
    data: {
        usersList: globalUsersList,
        selectedUser: {},
        // input con il v-model
        newText: ""
    },
    methods: {
        // restituisce il path per cambiare immagine
        getAvatarPath(avatarID) {
            return `img/avatar${avatarID}.jpg`;
        },

        // per selezionare la conversazione
        onUserClick(user) {
            this.selectedUser = user;
        },

        // formatto l'orario con moment.js
        formattedTime(data) {
            return moment(data, "DD/MM/YYYY HH:mm:ss").format("HH:mm");
        },

        // creo il nuovo messaggio e lo pusho nell'array dell'utente selezionato
        // moment() restituisce la data corrente
        sendMessage() {

            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.newText,
                status: "sent"
            }

            this.selectedUser.messages.push(newMessage);

            // triggera al sendMessage()
            // parte il timer di 1 secondo --> setTimeOut 
            // ritorna il messaggio OK!
            // pushare il messaggio nei ricevuti del selectedUser
            // arrow function per accedere al this
            setTimeout(() => {
                const okRespond = {
                    // il messaggio deve formattare la data completa
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'OK! Boomer',
                    status: 'received'
                }

                this.selectedUser.messages.push(okRespond);

            },1000);

        },
    }
})