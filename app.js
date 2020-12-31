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

console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process);