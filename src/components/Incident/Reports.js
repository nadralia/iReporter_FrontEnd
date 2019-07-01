import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAllIncidentRequest } from '../../store/actions/incidentActions';
import '../../assets/static/css/reports.css';

class Reports extends Component {
    componentDidMount() {
        const { getIncidents } = this.props;
        getIncidents();
    }

    render() {
        const { incidents} = this.props;
        const incidentResults = incidents.map((incident)=>(
            <tr className="table-row" key={incident.incident_id}>
                <td className="table-cell id">{incident.incident_id}</td>
                <td className="table-cell type">{incident.incident_type}</td>
                <td className="table-cell comment">{incident.comment}</td>
                <td className="table-cell location">{incident.latitude}, {incident.longitude}</td>
                <td className="table-cell createdon">{incident.createdon}</td>
                <td className="table-cell status">{incident.status}</td>
                <td className="table-cell edit-delete-view">
                    <a href={`/incident/report/${incident.incident_id}`}>View</a> 
                </td>
            </tr> 

        ));

        return (
            <div>
                <section className="report-history-section">
                    <div className="report-history-section-content" id="section-reporthistory-wrapper" >
                        <div className="flex-box-main">
                            <div className="table-table-row-div" id="div-table-title">
                                <h2 className="heading-secondary-dark" id="table-title">
                                 Report history
                                </h2>
                            </div>
                            <div className="table-table-row-div" id="table-content">
                                <table className="report-history-table" id="report-history-table">
  
                                    <tbody>
                                        <tr className="table-row">
                                            <td className="table-cell">ID</td>
                                            <td className="table-cell">Type</td>
                                            <td className="table-cell">Comment</td>
                                            <td className="table-cell">Location</td>
                                            <td className="table-cell">Created on</td>
                                            <td className="table-cell">Status</td>
                                            <td className="table-cell">Actions</td>
                                        </tr>
                                        {incidentResults}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

Reports.propTypes = {
  getIncidents: PropTypes.func.isRequired,
  incidents: PropTypes.array.isRequired,
  error:PropTypes.object.isRequired
};

export const mapStateToProps = (state) => ({
    incidents: state.incident.available_incidents,
    error: state.incident.error,
})

export const mapDispatchToProps = dispatch => ({
    getIncidents: () => dispatch(
        fetchAllIncidentRequest(),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
