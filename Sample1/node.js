const fs = require('fs');

//added arrow function to this methode allown to differenciate 
const getNotes = (title) => {
    debugger;
    const notes = loadNotes();    
    if (title !== 'All') {
        return notes.find((note) => note.title === title)
    }
    return notes;
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicate = notes.find((note)=>note.title === title)
    if (!duplicate) {
        notes.push({
            title: title,
            body: body
        });
        const dataJson = JSON.stringify(notes);
        fs.writeFileSync('./Data/notes.json', dataJson);
    }
    else {
        console.log("Data duplicated")
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('./Data/notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    })
    if (notes.length === notesToKeep.length) {
        console.log('No note to be removed...')
        return;
    }
    const dataJson = JSON.stringify(notesToKeep);
    fs.writeFileSync('./Data/notes.json', dataJson);
    console.log('Note removed...')
}

const listTitels = () => {
    const titels = [];
    loadNotes().forEach(notes => {
        titels.push(notes.title);
    });
    return titels;
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listTitels: listTitels
}
