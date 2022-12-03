import React, { useState } from 'react'                                                   // Importing useState 
import './Notelist.css'
import { RiDeleteBin3Fill, RiEditBoxFill } from "react-icons/ri";

const Notelist = (props) => {  

  const [ show, setShow ] = useState(false)


  const [editNote, setEditNote] = useState('')

  const editNoteHandler = (event) =>{
    setEditNote(event.target.value)     
    // setShow(false)
  }
  
  const [note, setNote ] = useState(props.data);

const addNoteOnStroke = (event) => {
  if(event.key === 'Enter'){
    setNote(editNote)
    setEditNote("");
  }
}

  return (
    <div id="notelist">
      {/* <h6>{ new Date().toLocaleTimeString() }</h6> */}
      <h5>{ note }</h5>
      {
          show?<input type="text" value={ editNote } onChange={ editNoteHandler }  onKeyDown={ addNoteOnStroke }/>:null
      }
      <div className='icon-cnt'>
      < RiEditBoxFill className='edit' id='edit' onClick={ ()=>setShow(!show) } />
      <RiDeleteBin3Fill className='delete' onClick={ props.deletNoteFunc } />
      </div>
      </div>
  )
}

export default Notelist

