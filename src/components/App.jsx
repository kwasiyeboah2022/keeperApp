import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Note from './Note.jsx'
import notes from '../notes'

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((singleNote) => (
        <Note
          id={singleNote.key}
          key={singleNote.key}
          title={singleNote.title}
          content={singleNote.content.substring(0, 70)}
        />
      ))}
    </div>
  )
}

export default App
