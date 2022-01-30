
const url = '/api/training'

class Sportsman {
    static allTrainings = async (body) => {
        try {
            const response = await fetch(`${url}/trainings`,
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
                return { err: true }
            }
        } catch (err) {
            console.error(err);
        }
    }

    static Archive = async (body) => {
        try {
            const response = await fetch(`${url}/archive`,

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
                return { err: true }
            }
        } catch (err) {
            console.error(err);
        }
    }

    static addSet = async (body) => {
        try {
            const response = await fetch(`${url}/set`,
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

    static maxSet = async (body) => {
        try {
            const response = await fetch(`${url}/maxset`,
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