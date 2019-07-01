import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//import styles
import '../../assets/static/css/create.css';

import { createIncidentRequest } from '../../store/actions/incidentActions';

class CreateIncident extends Component {
    constructor(props) {
        super(props);
        this.state = {
          incident_type:'',
          comment:'',
          image:''
        };
      }
    
    
    handleChange = (event) => {
     this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { createIncident, history } = this.props
      const incident_data = {
        comment: this.state.comment,
        incident_type: this.state.incident_type,
        latitude:'6.5951139',
        longitude:'3.3429975',
        videos: 'video.mp4',
        images: 'images.jpg',
      } 
      createIncident(incident_data, history);

    };

    render() {

        const {comment} = this.state
        return (
            <div>
                <ToastContainer autoClose={4000} />
                <section className="incident">
                    <div className="incident-flex-box">
                        <div className="div-over-map-incident">
                            <h2 className="title-heading" id="form-incident-title">
                              Create an Incident Report
                            </h2>
                        </div>
                        <div className="div-over-form-incident">   
                            <form onSubmit={this.handleSubmit} className="incident-form" id="incident-form">
                                <div className="incident-input-flex" id="form-group-last-child">
                                    <div className="incident-field" id="incident-field-textarea">
                                        <textarea 
                                            type="text"
                                            name="comment" 
                                            id="comment" 
                                            rows="6"
                                            value={comment}
                                            onChange={this.handleChange}
                                            placeholder="Tell us more about this incident"
                                        />
                                    </div>
                                </div>

                                <div id="radio-container" className="incident-input-flex">
                                    <label htmlFor="incident_type">Incident Type</label>
                                    <select name="incident_type" id="incident_type" onChange={this.handleChange}>
                                        <option >Select Incident Type</option>
                                        <option value="intervention">Intervention</option>
                                        <option value="red-flag">Red-flag</option>
                                    </select>
                                </div>
                                <div className="incident-input-flex" id="incident-input-flex-for-btn">
                                    <div className="div-incident-form-btn">
                                        <button className="btn" id="create-incident-btn">Create Report</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

CreateIncident.propTypes = {
    createIncident: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export const mapDispatchToProps = dispatch => ({
    createIncident: (incidentData, history) => dispatch(
        createIncidentRequest(incidentData, history),
    ),
});
export const mapStateToProps = (state) =>({
    user: state.auth.user,
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateIncident));
