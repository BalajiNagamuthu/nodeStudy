//fetch will get the data from the api services
// fetch('http://localhost:8081/data').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// });

const form = document.querySelector('form');
const input = document.querySelector('input');
const message1 = document.querySelector('#msg1');
const message2 = document.querySelector('#msg2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/data?search=name&name=' + input.value).then((response) => {
        response.json().then((data) => {
            if(data.Error){
                message2.textContent = data.Error
            }
            else{
                message1.textContent = data.Data[0].name
            }
        })
    });
})