import React, { useState } from "react";
import Select from "react-select"
const options = [
    { value: '5', label: 'Tres bien' },
    { value: '3', label: 'bien' },
    { value: '2', label: 'moyen' },
    { value: '0', label: 'non satisfait' },
];
function ReviewSection({ text, radioId }) {
    const [selectedOption, setSelectedOption] = useState(null);

    function handleChange(event) {
        setSelectedOption({ value: event.target.value });
    }
    return (
        <div className="quiz-group">
            <div className="question">
                <h2>{text} {console.log(selectedOption)} </h2>
            </div>
            <div className="radio-container">
                <p>
                    <Select>
                        <option value="Tres bien">Tres bien</option>
                        <option value="bien">bien</option>
                        <option value="moyen">moyen</option>
                        <option value="non satisfait">non satisfait</option>
                    </Select>

                </p>
            </div>

        </div>)

}

export default ReviewSection;