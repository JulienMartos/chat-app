import React from 'react'
import "./contact.css"
import PropTypes from 'prop-types';


/*parent*/
const Contact = (props) => 
    <div className = "Contact">
        <img src = {props.avatar} alt ="" className = "avatar"/>
        <div className = "status">
            <h4 className = "name">{props.name}</h4>
            {props.statut ? <span className = "status-online"></span> : <span className = "status-offline"></span>}
            <p className = "status-text">{props.statut ? "online" : "offline"}</p>          
        </div>
    </div>

Contact.propTypes = {
    name : PropTypes.string,
    statut : PropTypes.bool,
}


export default Contact;