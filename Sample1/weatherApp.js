const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2f3ef856a6f189e6db2771e3d3b80890&query=27.2046,77.4977';

request({ url: url, json: true }, (error, response) => {    
    console.log(response.body.current);
});