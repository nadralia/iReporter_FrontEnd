import React, { Component } from 'react'

//import styles
import '../../assets/static/css/create.css';

class CreateIncident extends Component {
    render() {
        return (
            <div>
                <section className="incident">
                    <div className="incident-flex-box">
                        <div className="div-over-map-incident">
                            <h2 className="title-heading" id="form-incident-title">
                              Create an Incident Report
                            </h2>
                            <div className="google-map" id="google-map">Map Area</div>
                        </div>
                        <div className="div-over-form-incident">   
                            <form action="#" className="incident-form" id="incident-form">
                   
                                <div className="div-lat-and-long incident-input-flex"> 
                                    <div className="incident-field">
                                        <input type="text" className="incident-form-input" id="latitude" placeholder="Latitude" />
                                    </div>
                                    <div className="incident-field">
                                        <input type="text" className="incident-form-input" id="longitude" placeholder="Longitude" />
                                    </div>
                                </div>
                                <div className="div-over-upload-group incident-input-flex">
                                    <div className="incident-field incident-field-for-upload">
                                        <div className="upload-group">
                                            <label htmlFor="pic" className="upload-label">Images</label>
                                            <input type="file" className="incident-input-file-upload" id="images" name="images" accept="image/*" />
                                        </div>
                                    </div>
                                </div>
					
                                <div className="incident-input-flex" id="form-group-last-child">
                                    <div className="incident-field" id="incident-field-textarea">
                                        <textarea name="comment" id="comment" rows="6" placeholder="Tell us more about this incident" />
                                    </div>
                                </div>

                                <div id="radio-container" className="incident-input-flex">
                                    <label htmlFor="incident_type">Incident Type</label>
                                    <select id="incident_type">
                                        <option>Select Incident Type</option>
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

export default CreateIncident;