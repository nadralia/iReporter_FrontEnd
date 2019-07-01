import React, { Component } from 'react'

class Report extends Component {
    render() {
        return (
            <div>
                <section className="view-report">
                    <div className="view-report-flex-box">
                        <div className="div-over-form-view">
                            <div className="id-type-div view-flex">
                                <div className="rep-field rep-field-for-id-and-type">
                                    <h3>Incident ID: <span id="incident-id" /></h3>
                                </div>
                                <div className="rep-field rep-field-for-id-and-type">
                                    <h3>Incident Type: <span id="incident-type" /></h3>
                                </div>
                            </div>

                            <div className="lat-long view-flex">
                                <div className="rep-field rep-field-for-id-and-type" id="rep-field-for-address">
                                    <h3> Location: <span id="location" /></h3>
                                </div>
                                <div className="rep-field rep-field-for-id-and-type ">
                                    <h3> Report Status: <span id="report-status" />
                                    </h3>
                                </div>
                            </div>
                            <div className="view-flex" id="form-group-last-child">
                                <div className="rep-field">
                                    <label htmlFor="comment" className="form-label">Comments</label>
                                    <div className="comment-body" id="comment-body" />
                                </div>
                            </div>

                            <div className="img-collection-container">
                                <span className="form-label view-form-label form-label-images">Images</span>
                                <div className="img-file-input-container" id="report-div-img" />
                            </div>

                            <div className="vid-collection-container">
                                <span className="form-label view-form-label form-label-videos">Videos</span>
                                <div className="vid-file-input-container" className="vid-file-input-container">
                                    <video src="" id="report-video" />
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </section>
            </div>
        )
    }
}

export default Report;
