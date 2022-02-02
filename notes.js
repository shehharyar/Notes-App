const fs = require('fs');
const chalk=require('chalk');
const { title } = require('process');



const addNotes=(title,body)=>{
        
    const notes =loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title )

    if(duplicateNotes.length ===0){

     
        notes.push(
            {
               title: title,
               body: body
            }
        )
   saveNotes(notes)
   console.log("New note added!");
    }
    else{
         console.log("Note title taken")
    }

}

const saveNotes =(notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes =()=>{

    try{
        const dataBuffer= fs.readFileSync('notes.json');
        const jsonData = dataBuffer.toString(); 
        return JSON.parse(jsonData);
} 
    catch(e){
  
    return []
}   
}

const removeNotes=(title)=>{
    
    const notes=loadNotes();
    const notesToKeep = notes.filter((note)=> note.title !== title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep);
    }
else{
    console.log(chalk.red.inverse('No note found'))
}

}

const listNotes =()=>{
    const notes =loadNotes();
    console.log(chalk.inverse("Your Notes"))

    notes.forEach((note)=>{
        console.log(note.title)
    })

}

const readNotes=(title)=>{
    const notes= loadNotes();
    const note= notes.find((note)=> note.title === title)
    
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
           console.log(chalk.red.inverse("Note not found"));
    }
}

module.exports={
      addNotes: addNotes,
      removeNotes: removeNotes,
      listNotes :listNotes,
      readNotes: readNotes
    }