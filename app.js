//  const { require } = require('yargs');
const yargs = require('yargs');
const notes = require("./notes.js");


yargs.command({
    command:"add",
    describe: " Add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Body Title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

// Remove command
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
          title:{
              describe:"remove title",
              demandOption:true,
              type: "string"
          }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
})
//list command
yargs.command({
    command:"list",
    describe:"list the data (notes)",
    handler(){
      notes.listNotes()
    }
})

yargs.command({
    command:"read",
    describe: "Read a notes",
    builder: {
        title: {
             describe:"note title",
             demandOption: true,
              type:"string"
            }
},
    handler(argv){
        notes.readNotes(argv.title);
    }
})
// yargs.parse();
console.log(yargs.argv)