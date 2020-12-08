import React from 'react'

const Backdrop = (props) =>
    props.show ? (
        <div onClick={props.toogleBackdrop} className='backdrop'></div>
    ) : null


export default Backdrop

