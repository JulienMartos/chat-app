import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.statut,
    };
  }

  render() {
    return (
      <div
        className="Contact"
        onClick={(event) => {
          const newStatut = !this.state.online;
          this.setState({ online: newStatut });
        }}
      >
        <img src={this.props.avatar} alt="" className="avatar" />
        <div className="status">
          <h4 className="name">{this.props.name}</h4>
          {this.state.online ? (
            <span className="status-online"></span>
          ) : (
            <span className="status-offline"></span>
          )}
          <p className="status-text">
            {this.state.online ? "online" : "offline"}
          </p>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string,
  statut: PropTypes.bool,
};

export default Contact;
