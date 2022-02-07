import React, { Component } from 'react';
import ReviewSection from "../ReviewSection"

export class SecandStep extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <div className="title-content">
                    Environement et moyen pidagogiques
                </div>
                <div className="question-content">
                    <ReviewSection text="Accueil" radioId="R5" />
                    <ReviewSection text="Salle de formation" radioId="R6" />
                    <ReviewSection text="Matriel informatique" radioId="R7" />
                    <ReviewSection text="support du formation" radioId="R8" />
                </div>
                <div className="btn-container">
                    <div className="btn-form">
                        <span onClick={this.continue} >NEXT</span>
                    </div>

                    <div className="btn-form">
                        <span onClick={this.back}>Back</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default SecandStep;
