//const fetch = require('node-fetch')

const url = '/api'

class User {
    static login = async (body) => {
        try {
            const res = await fetch(`${url}/login`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            let data = await res.json()
            if (res.status === 404) {
                return { err: 'Неправильное имя пользователя или пароль' }
            } else {
                localStorage.setItem('jwt', data.token);
                return data
            }

        } catch (err) {

            console.error(err);
        }
    }


    static signup = async (body) => {
        try {
            const res = await fetch(`${url}/signup`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });

            let data = await res.json()

            if (res.status === 409) {
                return { err: 'Пользователь с таким логином уже существует' }
            } else {
                localStorage.setItem('jwt', data.token);
                return data
            }


        } catch (err) {

            console.error(err);
        }
    }
    static logout = async () => {
        localStorage.removeItem('user');
    }



}

export { User }