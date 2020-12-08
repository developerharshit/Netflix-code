import React from 'react'
import Backdrop from './Backdrop'

const Modal = (props) => {
    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieClicked.backdrop_path})`,
    }
    return (
        <>
            <Backdrop show={props.show} toogleBackdrop={props.modalClosed} />
            <div
                className={props.show ? 'modal show' : 'modal hide'}
                style={backgroundStyle}
            >
                {props.children}
            </div>
        </>
    )
}

export default Modal


