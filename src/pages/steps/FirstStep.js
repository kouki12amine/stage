import React, { Component } from 'react';
import ReviewSection from "../ReviewSection"



export class FirstStep extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
    
                        <div className="title-content">
                            Formateur
                        </div>
                        <div className="question-content">
                            <ReviewSection text="Maitrisie du sujet" radioId="R1" />
                            <ReviewSection text="gestion du temps" radioId="R2" />
                            <ReviewSection text="conforme du programme" radioId="R3" />
                            <ReviewSection text="qualite pidgogique ( rythme ,comunication , ...) " radioId="R4" />
                        </div>

            </React.Fragment>

        );
    }

}
export default FirstStep;
