import fetch from 'node-fetch';

const login = async (userName, password) => {
    const options = {
        method: 'POST',
        body: JSON.stringify({userName,password}),
        headers: {'Content-Type':'application/json',
                'Accept':'text'
            }
    };
    const tokenResponse = await fetch('http://34.74.239.37/login',options);
    const loginResponse = await tokenResponse.text();

    return loginResponse;
}
export {login};

