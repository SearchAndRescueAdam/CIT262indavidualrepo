import fetch from 'node-fetch';
import assert from 'assert';

it ('Should get Hello', async ()=>{
    const response = await fetch('http://34.74.239.37');
    const text = await response.text();

    assert.equal(text,"Hello");
})
