import { useEffect, useState } from 'react'
import Header from './components/Header'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import ShowNote from './components/ShowNote'

function App() {
  let [title, setTitle] = useState("")
  let [text, setText] = useState("")
  let [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  let [hidden, setHidden] = useState(true)
  let [showTitle, setShowTitle] = useState("")
  let [showText, setShowText] = useState("")

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const changeHandler = (e) => {
    if (e.target.tagName.toLowerCase() == "input")
      setTitle(e.target.value)
    if (e.target.tagName.toLowerCase() == "textarea")
      setText(e.target.value)
  }

  const addNote = () => {
    title != "" && text != "" ? setNotes([...notes, {title:title, text:text}]) : alert("Write all content!")
    setTitle("")
    setText("")
  }

  const deleteNote = (e) => {
    const updatedItem = notes.filter((_, i) => i != e.target.id)
    setNotes(updatedItem)
    localStorage.setItem('notes', JSON.stringify(updatedItem))
  }

  const showHidden = (e) => {
    setHidden((prev) => !prev)
    let i = e.target.id
    setShowTitle(notes[i].title)
    setShowText(notes[i].text)
  }

  return (
    <div className='bg-gray-900 min-h-screen w-screen text-white'>
      <Header />

      {hidden ? 
      <div className='flex flex-row w-screen h-[90vh] z-10'>
        <LeftContent changeHandler={changeHandler} addNote={addNote} title={title} text={text} />
        <RightContent notes={notes} deleteNote={deleteNote} show={showHidden} />
      </div> : 
      <div className='h-[80vh] py-3'>
        <ShowNote show={showHidden} title={showTitle} text={showText} />
      </div>
      }
    </div>
  )
}

export default App
