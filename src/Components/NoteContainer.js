import React, { useEffect, useState } from 'react'
import './NoteContainer.css'
import Notelist from './Notelist'

const getLocalStorageItem = () =>{
  let List =  localStorage.getItem('Note')
  // console.log(List);
  if(List){
    return JSON.parse(localStorage.getItem('Note'))
  }else{
    return [];
  }
}


const NoteContainer = () => {
  let [ notes, setNotes ] = useState(getLocalStorageItem());

  const [ newNote, setNewNote ] = useState('')

  useEffect (() =>{
    localStorage.setItem('Note', JSON.stringify(notes))
  },[notes])

const deleteNote = (event) =>{
  event.preventDefault();  
  notes.pop(newNote)
  setNotes([...notes])
}

  const addNoteOnStroke = (event) => {
      if(event.key === 'Enter'){
        event.preventDefault()
        const entered_Note = {
          title : newNote
        }
        const updatedNote =[...notes, entered_Note,];
        setNotes(updatedNote);
        setNewNote('')
      }
  }

  const onChangeHandler = (event) =>{
    setNewNote(event.target.value)
  }

  const submitHandler=(event) =>{
    event.preventDefault()
    const entered_Note = {
      title : newNote
    }
    const updatedNote =[...notes, entered_Note,];
    setNotes(updatedNote);
    setNewNote('')
  }


  return (
    <div id='noteContainer'>
      {
        notes.map(                            // mapping is use to perform operation on each element of array,Basically used to refresh the list til its length
          (noteData , i )=>(
            <Notelist  key={ "note"+i.toString() } data={ noteData.title }  deletNoteFunc={ deleteNote } Notes={ notes }/>
            )
        )
      }
      <form onSubmit={ submitHandler }>
        <input type="text" placeholder='Add New Note' value={ newNote } onKeyDown={ addNoteOnStroke } onChange={ onChangeHandler }/>
        <button type='submit'  className="add" >+</button>
        </form>
        </div>
  )
}

export default NoteContainer