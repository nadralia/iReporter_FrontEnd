import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchIncidentRequest } from '../../store/actions/incidentActions';

import '../../assets/static/css/report.css';

class Report extends Component {

    componentDidMount() {
        const { match } = this.props;
        if (match) {
          const { params: { incident_id } } = match;
          const { getIncident } = this.props;
          getIncident(incident_id);
        }
    }
    render() {
        const { incident:{ comment,incident_type,incident_id,status,latitude,longitude} } = this.props;
        return (
            <div>
                <section className="view-report">
                    <div className="view-report-flex-box">
                        <div className="div-over-form-view">
                            <div className="id-type-div view-flex">
                                <div className="rep-field rep-field-for-id-and-type">
                                    <h3>Incident ID: <span id="incident-id">{incident_id}</span></h3>
                                </div>
                                <div className="rep-field rep-field-for-id-and-type">
                                    <h3>Incident Type: <span id="incident-type" > {incident_type}</span></h3>
                                </div>
                            </div>

                            <div className="lat-long view-flex">
                                <div className="rep-field rep-field-for-id-and-type" id="rep-field-for-address">
                                    <h3> Location: <span id="location" >{latitude}{','}{longitude}</span></h3>
                                </div>
                                <div className="rep-field rep-field-for-id-and-type ">
                                    <h3> Report Status: <span id="report-status" >{status}</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="view-flex" id="form-group-last-child">
                                <div className="rep-field">
                                    <label htmlFor="comment" className="form-label">Comments</label>
                                    <div className="comment-body" id="comment-body" >{ comment }</div>
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

Report.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
          incident_id: PropTypes.string.isRequired,
        })
      }).isRequired,
    getIncident: PropTypes.func.isRequired,
    incident: PropTypes.shape({
        comment: PropTypes.string,
    }),
};

export const mapStateToProps = (state) => ({
      incident: state.incident.incident,
})
  
export const mapDispatchToProps = dispatch => ({
    getIncident: (incident_id) => dispatch(
        fetchIncidentRequest(incident_id),
    ),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Report)
