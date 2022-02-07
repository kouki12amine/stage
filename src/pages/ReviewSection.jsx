import React from 'react';


function ReviewSection({ text, radioId }) {
    return (
        <div className="quiz-group">
            <div className="question">
                <h2>{text}</h2>
            </div>
            <div className="radio-container">
                <p>
                    <input type="radio" name={radioId} id="radio-1" value="5" />
                    <label className='label-radio' for="radio-1">Tres bien</label>
                </p>
                <p>
                    <input type="radio" name={radioId} id="radio-2" value="3" />
                    <label className='label-radio' for="radio-2">bien</label>
                </p>
                <p>
                    <input type="radio" name={radioId} id="radio-3" value="2" />
                    <label className='label-radio' for="radio-3">moyen</label>
                </p>
                <p>
                    <input type="radio" name={radioId} id="radio-4" value="0" />
                    <label className='label-radio' for="radio-4">non satisfait</label>
                </p>
            </div>

        </div>)

}

export default ReviewSection;