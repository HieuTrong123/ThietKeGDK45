import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
const Backdrop = (props) => {
    return <div className={`${classes.modal} ${props.Modal}`} style={props.state ? { display: 'block' } : { display: 'none' }} onClick={props.onClick}></div>
}
const ModalOverlay = (props) => {
    return (
        <div className={`${classes.content} ${props.className}`} onClick={(e) => e.stopPropagation()}>
            {props.children}
        </div>)
}
const portalElement = document.getElementById('overlays');
export default function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop className={props.className} state={props.state} onClick={props.onClick} Modal={props.Modal} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay className={props.className} state={props.state} onClick={props.onClick} Modal={props.Modal}>
                {props.children}
            </ModalOverlay>, portalElement)}
        </>
    )
}
