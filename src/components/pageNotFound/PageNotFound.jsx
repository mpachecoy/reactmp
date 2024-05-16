import React from 'react'
import errorImg from '../Media/Page-Not-Found-Error1.png'

const PageNotFound = () => {
  return (
    <div className='d-flex justify-content-center mh-100'>
        <img className='mw-100 h-100' src={errorImg} alt="Imagen 404" />
    </div>
  )
}

export default PageNotFound