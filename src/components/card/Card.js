import React from 'react';
import './Card.css';
import Modal from '../modal/Modal';

function Card(props) {

    const [displayModal, setDisplayModal] = React.useState(false);




    function getDay() {
        return (
            Date(props.date).substr(4, 11)
        )
    }

function open(e){
setDisplayModal(true)
}


    return (
<>
        {
            displayModal?<Modal
            imageL={props.imageL} title={props.title} content={props.content} avatar={props.avatar}  name={props.name} role={props.role}
            setDisplayModal={setDisplayModal}
            key={props.key}
            
            />:null
        }


        <div className="card-wrapper" id="card-wrapper" onClick={open}>

            <div className="crop">
                <div className="container">
                    <img className="img-crop" alt="" src={props.image} />
                    <div className="overlay">
                        <div className="text">Learn More</div>
                    </div>
                </div>
            </div>
            <div className="card-info">
                <h5><span className="dot-1"></span><span className="dot-2"></span></h5>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <div className="card_wrap-1">
                    <div className="card_wrap-2">
                        <p>{props.name}</p>
                        <p className="role">{props.role}</p>
                    </div>

                    <p>{getDay()}</p>

                </div>
            </div>



        </div>

</>

    );
}

export default Card;