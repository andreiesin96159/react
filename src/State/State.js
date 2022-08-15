import { ProfilePost } from "./ProfilePost";
import { UsersPage } from "./UsersPage";
const store = {
    _RenderPage() {
        console.log('RenderPage заглушка')
    },

    _state: {
        profilePost: {
            Post: [
                { id: '1', massager: "Привет я новенький", liks: '20' },
                { id: '2', massager: "Ураа", liks: '77' },
                { id: '3', massager: "Наконец", liks: '54' },
                { id: '4', massager: "Хочу сказать это лучший пост", liks: '32' },
            ]
        },
        usersPage: {
            Massages: [
                { massage: 'Hi' },
                { massage: 'Yo' },
                { massage: 'Hi  урааа' },
            ],

            Users: [
                { id: '1', name: 'Peti' },
                { id: '2', name: 'Igor' },
                { id: '3', name: 'Andrei' },
                { id: '4', name: 'Vova' },
                { id: '5', name: 'Olga' }
            ],
        },

    },
    getState() {
        return this._state;
    },



    subscraib(callback) {
        this._RenderPage = callback;
    },


    dispatch(action) {
       this._state.profilePost = ProfilePost(this._state.profilePost, action )
       this._state.usersPage = UsersPage(this._state.usersPage, action )
       this._RenderPage(this._state);
    }

}




export default store;