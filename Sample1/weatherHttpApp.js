const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=2f3ef856a6f189e6db2771e3d3b80890&query=27.2046,77.4977';
//const url = 'http://1api.weatherstack.com/current?access_key=2f3ef856a6f189e6db2771e3d3b80890&query=27.2046,77.4977';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = chunk.toString();
        console.log('data calles')
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body.location.country);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();