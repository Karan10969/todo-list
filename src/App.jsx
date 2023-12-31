import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'


export default function App(){

  const [notes, setNotes] = useState([])
  const [save, setSave] = useState(false)
  const [title, setTitle] = useState([])

    let currentNote = ""
    let currentTitle = ""

 
  function getNote(){
   const {name, value} = event.target
    currentNote = value
    }

  function getTitle(){
    const{name, value} = event.target
    currentTitle = value
  }


  function saveNote(){

    for(let i=0; i<notes.length;i++){
      if(notes[i] === currentNote){
        return alert("Duplicate Data found !! Please check your notes !!")
      }
    }

    if(currentNote === ""){
      return alert("Cannot save empty Note")
    }

    if(currentTitle === ""){
      return alert("Plese give your note a title")
    }

    for(let i=0; i<title.length;i++){
      if(title[i] === currentTitle){
        return alert("Duplicate Title found !! Please Choose a Unique title !!")
      }
    }

      setTitle(prevTitle => (
        [...prevTitle, currentTitle]
      ))
    
      setNotes ( prevNotes => (
        [...prevNotes, currentNote]
    ))

      setSave(true)
      document.getElementById("noteTexts").value = ""
      document.getElementById("title").value = ""
  }


  function toggleSavedNote(event, index){
    
    document.getElementById("noteTexts").value = notes[index]
}

  function deleteNote(index){

    setNotes( prevNotes => {
      const updatedArray = []
        for(let i=0; i<prevNotes.length; i++){
          if(index !== i){
            updatedArray.push(prevNotes[i])
          }
        }
        return updatedArray
    })

    setTitle( prevTitle => {
      const updatedTitle = []
        for(let i=0; i<prevTitle.length; i++){
          if(index !== i){
            updatedTitle.push(prevTitle[i])
          }
        }
        return updatedTitle
    })

    document.getElementById("noteTexts").value = ""

  }

  
  function moveNoteUp(index){
    
    setNotes( prevNotes => {
      const upArray = [...prevNotes]
      if(index > 0){
        [upArray[index], upArray[index-1]] = [upArray[index-1], upArray[index]]
      }
      return upArray
    })

    setTitle( prevTitle => {
      const upTitle = [...prevTitle]
      if(index > 0){
        [upTitle[index], upTitle[index-1]] = [upTitle[index-1], upTitle[index]]
      }
      return upTitle
    })

  }

  return(

    <div className="main-container">
      <Sidebar
      notesArray={notes}
      saved={save}
      notesTitle={title}
      savedNotes={toggleSavedNote}
      delNote={deleteNote}
      moveNote={moveNoteUp}
      />
      <Editor 
      toggleNote={getNote}
      toggleTitle={getTitle}
      toggleSave={saveNote}
      />
    </div>

  )
}