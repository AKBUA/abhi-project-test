import './Modal.css';
import React from 'react';

function Modal(props) {
function close(e){
    props.setDisplayModal(false);
}

    return (

<div className="mask">
<div className="modal-wrapper">
            <h3 onClick={close}>X</h3>
            <div className=" modal-crop"><img className="img-crop" alt="" src={props.imageL} /></div>
           <div className="content"> <h2>{props.title}</h2>
            <p>{props.content}</p>
            <div className="avatar-info">
                <div className="avatar"><img className="avatar" alt="" src={props.avatar} /></div>
                <div className="role">
                    <p>{props.name}</p>
                    <p className="roles">{props.role}</p>
                </div>
            </div></div>

        </div>
</div>

        
    );
}

export default Modal;