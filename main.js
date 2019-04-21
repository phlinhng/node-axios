// main.js

const axios = require('axios');

let data = {"hello": "world"};

let config = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'text'
};

for(var i=0; i<10; i++){
    let data = {"hello": i};
    axios.post('http://35.201.174.30:4200/echo', data, config)
        .then((response) => {
            console.log(response.data);
    });
}