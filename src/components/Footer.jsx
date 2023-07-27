import React from 'react'

const currentYear = new Date().getFullYear()
console.log(currentYear)

function Footer() {
  return (
    <footer>
      <p> Copyright ⓒ {currentYear}</p>
    </footer>
  )
}

export default Footer
