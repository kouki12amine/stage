import React, { Component } from 'react';
import ReviewSection from '../ReviewSection';
import Topnavigation from '../Topnavigation';


export class ThirdStep extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <Topnavigation />
                <div className="content-group">
                    <div className="container">
                        <div className="title-content">
                            Formation
                        </div>
                        <div className="question-content">
                            <ReviewSection text="Objet atient" radioId="R9" />
                        </div>
                        <div className="btn-container">
                            <div className="btn-form">
                                <span>NEXT</span>
                            </div>

                            <div className="btn-form">
                                <span>CANCEL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ThirdStep;
