import React, { Component } from 'react'

class Landing extends Component {
    render() {
        return (
            <div>
                <section className="background-img">
                    <div className="container">
                        <h2 className="background-title">Report Corruption</h2>
                        <p className="background-paragraph">
                        Corruption is a huge bane to Africa’s development. African countries must develop novel and
                        localised solutions that will curb this menace, hence the birth of iReporter. iReporter enables
                        any/every citizen to bring any form of corruption to the notice of appropriate authorities and the
                        general public. Users can also report on things that needs government intervention.
                        </p>
                    </div>
                </section>
                <section className="how-to">
                    <div className="container">
                        <h2 className="section-title">How it works</h2>
                        <p className="section-text">
                        In 3 easy steps you can easily report corruption cases and seek
                        government intervention.
                        </p>
                        <div className="steps">
                            <div className="column step">
                                <span className="circle-icon">1</span>
                                <p className="section-text">
                                Create and submit a red flag or intervention record. Set a title,
                                attach images/videos and input your location.
                                </p>
                            </div>
                            <div className="column step">
                                <span className="circle-icon">2</span>
                                <p className="section-text">
                                Your record gets submitted to the appropriate authority and
                                process is put in place to start reviewing your record.
                                </p>
                            </div>
                            <div className="column step">
                                <span className="circle-icon">3</span>
                                <p className="section-text">
                                Your record gets reviewed and you get a real time email feedback
                                upon completion of the reviews.
                                </p>
                            </div>
                        </div>
                    </div>
      
                </section>
                
            </div>
        )
    }
}

export default Landing;
