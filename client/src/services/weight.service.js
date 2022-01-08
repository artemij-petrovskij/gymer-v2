const fetch = require('node-fetch')

const url = '/api/weight'

class Sportsman {
    static allWeights = async (body) => {
        try {
            const response = await fetch(`${url}/show`,
                {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.jwt}`
                    },
                });
            if (response.status === 201) {
                return response.json()
            } else {
                return { err: 'Server error' }
            }
        } catch (err) {
            console.error(err);
        }
    }
    static changeWeight = async (body) => {
        try {
            const response = await fetch(`${url}/change`,
                {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.jwt}`
                    },
                });
            if (response.status === 201) {
                return response.json()
            } else {
                return { err: 'Server error' }
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export { Sportsman }