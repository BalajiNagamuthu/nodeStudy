const node = require("../node");
const arrowFun = require("./arrowFun");
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'title property',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body property',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        node.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a new note from the existing list',
    builder: {
        title: {
            describe: 'title property',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        node.removeNote(argv.title);
    }
})

yargs.command({
    command: 'get',
    describe: 'getting the notes from the json, if we pass the title we will get the actual note. If the title is all we will get all the notes',
    builder: {
        title: {
            describe: 'title property',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(node.getNotes(argv.title));
    }
})

yargs.command({
    command: 'getAllTitels',
    describe: 'Get all the titels',
    handler: function (argv) {
        console.log(node.listTitels());
    }
})

yargs.command({
    command: 'getInComTask',
    describe: 'Getting the tasks with status as incomplete from the arrow function',
    handler: function (argv) {
        console.log(arrowFun.getInCompletedTasks());
    }
})

yargs.argv;