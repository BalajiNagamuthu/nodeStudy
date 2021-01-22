//import { writeFile, appendFile } from 'fs';

///*****************************Section 1*************************************///

///Sync Code
// fileSystem.writeFileSync('test.txt','Hi my name is Dinesh Balaji.');

// fileSystem.appendFileSync('test.txt', ' I am working as a softwere developer. Now learning NodeJs');

//-----------------------------------------------------------------------------------
///Async code
// fileSystem.writeFile('test.txt','Hi my name is Dinesh Balaji. ', ()=>{
//     fileSystem.appendFile('test.txt', 'I am working as a softwere developer. Now learning NodeJs',()=>{
//         console.log('Updated the file.')
//     });
//     console.log('Successfully created the file.')
// });
// console.log('Processing the request......')
//-----------------------------------------------------------------------------------

///*****************************Section 2*************************************///

// import {} from './utils.js'
// writeFile('test.txt','Hi my name is Dinesh Balaji. ', ()=>{
//         appendFile('test.txt', 'I am working as a softwere developer. Now learning NodeJs',()=>{
//             console.log('Updated the file.')
//         });
//         console.log('Successfully created the file.')
//     });
//     console.log('Processing the request......')

// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process);

///*****************************Section 3*************************************///
// const yargs = require('yargs');
// console.log(yargs.argv);
///Use below command in the cmd "node app1.js --title="my thing" --body="my body""


///Call back Function sample
setTimeout(() => {
    console.log('2 sec time out')
}, 2000);

const getData = (input, print) => {
    setTimeout(() => {
        const data = {
            prop1: input,
            prop2: 0
        };
        print(undefined,data);
    }, 2100);
}

getData('data1',(error, data)=>{
    console.log(data);
    console.log(error);
});


/// Object de-structring
const product = {
label:'Note Bookl',
price:3,
stock: 200,
salesPrice:undefined
};

const {label: prodLable, stock, rating=5} = product;

console.log(prodLable);
console.log(stock);
//The default value assigned to rating works only if there is no property in the product object
console.log(rating);

// object destructring in the method
const trans=(type, {label, stock, salesPrice})=>{
console.log('Type of transaction is '+ type);
console.log(label + ' is available with us. Qty - '+ stock + ' and the selling price is '+ salesPrice);
}

trans('Online Order', product);