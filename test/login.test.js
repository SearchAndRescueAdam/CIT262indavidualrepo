import {login} from '../utils/login.js';

it ('should get login token',async ()=>{
    const loginRequest = {
        userName:"yourmom@gmail.com",
        password:"P@ssw0rd",
    }

    await login(loginRequest);
})
