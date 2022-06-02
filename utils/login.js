import fetch from 'node-fetch';

const login = async (userName, password) => {
    const options = {
        method: 'POST',
        body: JSON.stringify({userName,password}),
        headers: {'Content-Type':'application/json',
                'Accept':'text'
            }
    };
    const tokenResponse = await fetch('https://https://dev.stedi.me/login',options);
    const loginResponse = await tokenResponse.text();

    return loginResponse;
}
export {login};

