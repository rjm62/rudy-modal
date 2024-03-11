import React from 'react'
import './Modal.css'

function Modal ({message,closeModal}) {
  
    
    return (
        <div className="containerModal">
            <div className="containerDisplay">
                <p>{message}</p>
            </div>
            <button className="close" onClick={closeModal}>X</button>
        </div>
    )
}

export default Modal