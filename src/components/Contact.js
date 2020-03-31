import React from 'react'
import "./contact.css"


/*enfant*/
const utilisateur = {
    name : "Kitty Stanley",
    avatar : "https://randomuser.me/api/portraits/women/8.jpg",
    statut : true,
}


/*parent*/
const Contact = () => 
    <div className = "Contact">
        <img src = {utilisateur.avatar} alt ="" className = "avatar"/>
        <div className = "status">
            <h4 className = "name">{utilisateur.name}</h4>
            {utilisateur.statut ? <span className = "status-online"></span> : <span className = "status-offline"></span>}
            <p className = "status-text">{utilisateur.statut ? "online" : "offline"}</p>          
        </div>
    </div>


export default Contact;