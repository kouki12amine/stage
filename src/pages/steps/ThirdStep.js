import React, { Component } from 'react';
import ReviewSection from '../ReviewSection';


export class ThirdStep extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                    
                        <div className="title-content">
                            Formation
                        </div>
                        <div className="question-content">
                            <ReviewSection text="Objet atient" radioId="R9" />
                        </div>
            </React.Fragment>
        );
    }

}
export default ThirdStep;
